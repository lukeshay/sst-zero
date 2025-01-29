CREATE OR REPLACE FUNCTION set_timestamps()
RETURNS TRIGGER AS $$
BEGIN
    -- Set createdAt only when inserting
    IF TG_OP = 'INSERT' THEN
        NEW."createdAt" := CURRENT_TIMESTAMP;
    ELSE
        NEW."createdAt" := OLD."createdAt";
        NEW."createdBy" := OLD."createdBy";
    END IF;

    NEW."updatedAt" := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
--> statement-breakpoint
CREATE TABLE "draft" (
	"id" uuid PRIMARY KEY NOT NULL,
	"visibility" varchar(7) NOT NULL,
	"title" varchar NOT NULL,
	"createdAt" timestamp NOT NULL,
	"createdBy" uuid NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"updatedBy" uuid NOT NULL
);
--> statement-breakpoint
CREATE TRIGGER "draft_set_timestamps"
BEFORE INSERT OR UPDATE ON "draft"
FOR EACH ROW
EXECUTE FUNCTION set_timestamps();
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"createdAt" timestamp NOT NULL,
	"createdBy" uuid NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"updatedBy" uuid NOT NULL
);
--> statement-breakpoint
CREATE TRIGGER "user_set_timestamps"
BEFORE INSERT OR UPDATE ON "user"
FOR EACH ROW
EXECUTE FUNCTION set_timestamps();
--> statement-breakpoint
ALTER TABLE "draft" ADD CONSTRAINT "draft_createdBy_user_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;

import {
  type SubjectPayload,
  createSubjects,
} from "@openauthjs/openauth/subject";
import { object, string } from "valibot";

export const subjects = createSubjects({
  user: object({
    id: string(),
    email: string(),
    createdBy: string(),
    createdAt: string(),
    updatedBy: string(),
    updatedAt: string(),
  }),
});

export type Subjects = SubjectPayload<typeof subjects>;

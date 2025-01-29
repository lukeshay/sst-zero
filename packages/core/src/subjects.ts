import { object, string } from "valibot";
import {
  createSubjects,
  type SubjectPayload,
} from "@openauthjs/openauth/subject";

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

import { dns, domain } from "./dns";

export const email = new sst.aws.Email("Email", {
  sender: domain,
  dns,
});

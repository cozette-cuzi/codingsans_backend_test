import { object, string } from "zod";

export const loginSchema = object({
  body: object({
    username: string({
      required_error: "The username is required",
    }),
    password: string({
      required_error: "The password is required",
    }),
  }),
});

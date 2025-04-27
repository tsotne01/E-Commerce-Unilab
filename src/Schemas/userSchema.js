import { z } from "zod";

export const userRegistrationSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "name must be at least 1 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must be at least 1 characters" })
    .max(100),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100),
  checkbox: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const loginSchema = z.object({
  email: z.string().min(1, { message: "email is required." }),
  password: z.string().min(1, { message: "password is required." }),
});

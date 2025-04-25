import { z } from "zod";

export const userRegistrationSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters",
      })
      .max(100),
    lastName: z
      .string()
      .min(2, {
        message: "Last name must be at least 2 characters",
      })
      .max(100),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(100),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

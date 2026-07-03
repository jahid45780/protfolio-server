import { z } from "zod";

const chatValidationSchema = z.object({
  body: z.object({
    message: z
      .string({
        error: "Message is required",
      })
      .min(1, "Message cannot be empty")
      .max(1000, "Message is too long"),
  }),
});

export const ChatValidation = {
  chatValidationSchema,
};
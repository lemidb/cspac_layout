import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// swx@2WS
export const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contains at least one uppercase, one lowercase, one number, one special character",
      }
    ),
});

export type FormFields = z.infer<typeof schema>;
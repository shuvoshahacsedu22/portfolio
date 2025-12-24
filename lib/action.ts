'use server';
import {z} from 'zod';


const FormSchema = z.object({
    email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  },
  values?: {
    email: string;
    message: string;
  }
};
export async function sendEmail(prevState: State, formData: FormData) {

    const validatedFields = FormSchema.safeParse({
        email: formData.get("email"),
        message: formData.get("message"),
      });
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          values: {
            email: formData.get("email") as string,
            message: formData.get("message") as string,
          },
        };
      }
      const { email,message } = validatedFields.data;
   
      console.log("Email sent:", { email, message });
        return {
            values: {
            email: formData.get("email") as string,
            message: formData.get("message") as string,
          }
        };
}
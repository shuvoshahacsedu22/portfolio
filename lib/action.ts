'use server';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY!);
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
   
      try{
        await  resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: 'shuvoshaha7@gmail.com',
            subject: 'Message from contact form',
            replyTo: email,
            text: message,
            });
        
      }catch(error){
        return {
            errors: {
                message: ["Failed to send email. Please try again later."],
            },
            values: {
                email: formData.get("email") as string,
                message: formData.get("message") as string,
              }
        };
      }
        revalidatePath('/');
        redirect('/');
      
        return {
            values: {
            email: formData.get("email") as string,
            message: formData.get("message") as string,
          }
        };
}
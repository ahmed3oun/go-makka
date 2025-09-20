import { z } from "zod";

export const SaveFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z
        .string()
        .email({ message: 'Please enter a valid email.' })
        .trim(),
    passport: z
        .string()
        .min(6, { message: 'Be at least 6 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
})


export type SaveFormState =
    | {
        errors?: {
            name?: string[];
            email?: string[];
            passport?: string[];
        };
        message?: string;
    }
    | undefined;



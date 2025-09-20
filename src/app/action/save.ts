'use server';
import { db } from "@/drizzle/db";
import { SaveFormState, SaveFormSchema } from "./definitions";
import { eq } from "drizzle-orm";
import { users } from "@/drizzle/schema";

export const save = async (state: SaveFormState, formData: FormData): Promise<SaveFormState> => {
    const validatedFields = SaveFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        passport: formData.get('passport')
    })

    if (!validatedFields.success)
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }

    const { name, email, passport } = validatedFields.data;

    console.log({
        name,
        email,
        passport
    });

    const existedUser = await db.query.users.findFirst({
        where: eq(users.email, email)
    })

    if (existedUser) {
        return {
            message: "Email already exists, please use different email."
        }
    }

    const data = await db.insert(users)
        .values({
            name,
            email,
            passport
        })
        .returning()
    const user = data[0];

    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        };
    }

    const userId = user.id.toString();

    console.log('User created with ID:', userId);

};
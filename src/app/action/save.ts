'use server';
import { db } from "@/drizzle/db";
import { SaveFormState, SaveFormSchema } from "./definitions";
import { eq } from "drizzle-orm";
import { users } from "@/drizzle/schema";
import supabase from "@/drizzle/client";

export const save = async (state: SaveFormState, formData: FormData): Promise<SaveFormState> => {
    console.log(`${process.env.NODE_ENV} env`);
    console.log(`${process.env.DATABASE_URL} database url`);
    console.log(`${process.env.POSTGRES_URL} database url`);

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
    // try {
    // const existedUser = await db.query.users.findFirst({
    //     where: eq(users.email, email)
    // })
    // if (existedUser) {
    //     throw new Error("Email already exists, please use different email.");
    // }
    const { data, error: _error } = await supabase.from('users').select('*').eq('email', email).single();
    if (_error) {
        if (_error.code !== 'PGRST116') { // PGRST116: No rows found
            console.log('Error checking existing user:', _error);
            const { data, error } = await supabase
                .from('users').insert([{ name, email, passport }])
            //.select().single();
            console.log({ data, error });

            // const user_data = await db.insert(users)
            //     .values({
            //         name,
            //         email,
            //         passport
            //     })
            //     .returning()
            // const user = user_data[0];

            // if (!user) {
            //     return {
            //         message: 'An error occurred while creating your account.',
            //     };
            // }

            // const userId = user.id.toString();

            // console.log('User created with ID:', userId);
        }
    } else if (data) {
        console.log('Email already exists, please use different email');
        return {
            message: 'Email already exists, please use different email.',
        };
    }
    // } catch (error) {
    //     console.log('Error checking existing user:', error);

    //     return {
    //         message: error instanceof Error ? error.message : 'An error occurred while creating your account.',
    //     }
    // }



};
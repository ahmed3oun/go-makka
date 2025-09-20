import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { NewUser, Users, users } from "./schema";

const client = postgres(process.env.DATABASE_URL!, { prepare: false });

export const db = drizzle(client, { schema, logger: true });

export const insertUser = async (user: NewUser) => (await db.insert(users).values(user).returning())
export const selectUsers = async () => (await db.select().from(users))
import { drizzle } from "drizzle-orm/postgres-js"
// import postgres from 'postgres'
// import { drizzle } from 'drizzle-orm/node-postgres';
//import { Pool } from 'pg';



import { createClient } from '@supabase/supabase-js'
import { config } from "dotenv"
import postgres from "postgres";

console.log("Environment:", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
    config({ path: ".env.local" })
} else {
    config()
}
console.log("Database URL:", process.env.DATABASE_URL || process.env.POSTGRES_URL);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wuuuqnvhvrkdwmdcmulj.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXVxbnZodnJrZHdtZGNtdWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDgyMDksImV4cCI6MjA3MzkyNDIwOX0.PUZk8iT9we0EdXwAbxASxUH12a-p9DbRBxYJWMkV528'
const supabase = createClient(supabaseUrl, supabaseKey)

const client = postgres(process.env.DATABASE_URL!, { prepare: false })

const db = drizzle(client)

export { db, supabase }
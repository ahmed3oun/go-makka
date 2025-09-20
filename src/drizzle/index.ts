import { drizzle } from "drizzle-orm/postgres-js"
import postgres from 'postgres'
import { config } from "dotenv"

console.log("Environment:", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
    config({ path: ".env.local" })
} else {
    config()
}
console.log("Database URL:", process.env.DATABASE_URL);


const client = postgres(process.env.DATABASE_URL!, { prepare: false })

const db = drizzle(client)

export { db }
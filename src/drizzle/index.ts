import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

console.log("Environment:", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
    config({ path: ".env.local" })
} else {
    config()
}
console.log("Database URL:", process.env.DATABASE_URL);


const sql = neon(process.env.DATABASE_URL!)

// logger 
// const db = drizzle(sql, { logger: true })
const db = drizzle(sql)

export { db }
import { defineConfig } from "drizzle-kit"
import * as dotenv from 'dotenv'






dotenv.config({
    path: process.env.NODE_ENV === "development" ? ".env.local" : ".env"
})

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    schemaFilter: ["public"],
    introspect: {
        casing: 'preserve'
    },
    casing: "snake_case"
})
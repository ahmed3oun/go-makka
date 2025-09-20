import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL || "postgresql://postgres.wuuuqnvhvrkdwmdcmulj:RGmERXSVQxrssMiQ@aws-1-eu-west-3.pooler.supabase.com:6543/postgres",

    }
})
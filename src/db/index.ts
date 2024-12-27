import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { articleAnalysesTable } from "./schema";

const connectionString = process.env.DATABASE_URL as string;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

const articleAnalyses = await db.select().from(articleAnalysesTable);

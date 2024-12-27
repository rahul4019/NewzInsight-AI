import { json, pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const articleAnalysesTable = pgTable("article_analyses", {
  id: varchar("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  title: text("title").notNull(),
  articleLink: text("article_link").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  sentiment: json("sentiment").notNull(),
  biasAssessment: json("bias_assessment").notNull(),
  summary: json("summary").notNull(),
});

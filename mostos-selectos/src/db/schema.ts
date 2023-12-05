import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  integer,
  boolean,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const stateEnum = pgEnum("state", ["Active", "Inactive"]);

export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 40 }).notNull(),
    surnames: varchar("surnames", { length: 40 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    phone: varchar("phone", { length: 12 }),
    password: varchar("password", { length: 256 }).notNull(),
    roleId: integer("roleId").references(() => roles.id),
    state: stateEnum("state").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (users) => {
    return {
      nameIndex: uniqueIndex("email_idx").on(users.name),
    };
  }
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const roles = pgTable(
  "roles",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 40 }).notNull(),
    active: boolean("active").notNull().default(true),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (roles) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(roles.name),
    };
  }
);

export type Role = typeof roles.$inferSelect;
export type NewRole = typeof roles.$inferInsert;

export const usersRelations = relations(users, ({ many }) => ({
  roles: many(roles),
}));

export const rolesRelations = relations(roles, ({ one }) => ({
  user: one(users, { fields: [roles.id], references: [users.id] }),
}));



DO $$ BEGIN
 CREATE TYPE "state" AS ENUM('Active', 'Inactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "roles" ALTER COLUMN "name" SET DATA TYPE varchar(40);--> statement-breakpoint
ALTER TABLE "roles" ADD COLUMN "description" varchar(80);--> statement-breakpoint
ALTER TABLE "roles" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "roles" ADD COLUMN "updatedAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "roles" ADD COLUMN "active" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone" varchar(12);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "state" "state";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "users" ("name");--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "cell_phone";
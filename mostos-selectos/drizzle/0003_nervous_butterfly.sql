ALTER TABLE "roles" ALTER COLUMN "active" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "roles" DROP COLUMN IF EXISTS "description";
ALTER TABLE "goals" ADD COLUMN "desired_weekly_frequency" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" DROP COLUMN IF EXISTS "desired_week_frequency";
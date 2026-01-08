/*
  # Hall of Fame Database Schema

  1. New Tables
    - `hall_of_fame_members`
      - `id` (uuid, primary key) - unique identifier
      - `name` (text) - full name of the student/alumni
      - `photo_url` (text) - profile photo URL
      - `branch` (text) - department/branch (CSE, IT, AI, ECE, etc.)
      - `batch` (text) - graduation year
      - `achievement_type` (text) - type of achievement (Placement, Hackathon, Higher Studies, Alumni)
      - `achievement_title` (text) - short achievement title
      - `company` (text, nullable) - company name for placements
      - `position` (text, nullable) - job position
      - `package` (text, nullable) - salary package
      - `bio` (text) - detailed biography
      - `skills` (text[]) - array of skills
      - `linkedin_url` (text, nullable) - LinkedIn profile
      - `github_url` (text, nullable) - GitHub profile
      - `achievements` (text[]) - array of detailed achievements
      - `created_at` (timestamptz) - record creation timestamp
      - `updated_at` (timestamptz) - record update timestamp

  2. Security
    - Enable RLS on `hall_of_fame_members` table
    - Add policy for public read access (Hall of Fame is publicly viewable)
    - Add policy for authenticated insert/update (for admin management)
*/

CREATE TABLE IF NOT EXISTS hall_of_fame_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  photo_url text NOT NULL,
  branch text NOT NULL,
  batch text NOT NULL,
  achievement_type text NOT NULL,
  achievement_title text NOT NULL,
  company text,
  position text,
  package text,
  bio text NOT NULL,
  skills text[] DEFAULT '{}',
  linkedin_url text,
  github_url text,
  achievements text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hall_of_fame_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view Hall of Fame members"
  ON hall_of_fame_members
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert Hall of Fame members"
  ON hall_of_fame_members
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update Hall of Fame members"
  ON hall_of_fame_members
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete Hall of Fame members"
  ON hall_of_fame_members
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_hall_of_fame_batch ON hall_of_fame_members(batch);
CREATE INDEX IF NOT EXISTS idx_hall_of_fame_branch ON hall_of_fame_members(branch);
CREATE INDEX IF NOT EXISTS idx_hall_of_fame_achievement_type ON hall_of_fame_members(achievement_type);
CREATE INDEX IF NOT EXISTS idx_hall_of_fame_name ON hall_of_fame_members(name);
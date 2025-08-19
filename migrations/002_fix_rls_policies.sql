-- Fix RLS policies to allow anonymous form submissions

-- Drop existing policies
DROP POLICY IF EXISTS "Allow service role insert" ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions";
DROP POLICY IF EXISTS "Allow anon insert" ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions";
DROP POLICY IF EXISTS "Allow user read own submissions" ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions";

-- Create new policies that actually work for anonymous users
CREATE POLICY "Enable insert for anonymous users" 
  ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions"
  FOR INSERT 
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable select for service role" 
  ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions"
  FOR SELECT 
  TO service_role
  USING (true);

-- Make user_id nullable and set a default value
ALTER TABLE public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions" 
ALTER COLUMN user_id DROP NOT NULL;

ALTER TABLE public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions" 
ALTER COLUMN user_id SET DEFAULT NULL;
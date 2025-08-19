-- Migration generated from MCP operation
-- Operation: mcp_supabase_apply_migration
-- Purpose: Create form submissions table to store contact form data

-- Create form submissions table
CREATE TABLE public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL DEFAULT '58ec3cec-9bce-44e7-980d-27352226a600',
    form_data JSONB NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Allow service role insert" 
  ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions"
  FOR INSERT 
  TO service_role 
  WITH CHECK (true);

CREATE POLICY "Allow anon insert" 
  ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions"
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Allow user read own submissions" 
  ON public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions"
  FOR SELECT 
  TO authenticated 
  USING (user_id = auth.uid());

-- Add comments
COMMENT ON TABLE public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions" IS 'Store form submission data from website forms';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".id IS 'Unique identifier for each form submission';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".user_id IS 'User ID for RLS policies';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".form_data IS 'JSON data containing all form fields and values';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".submitted_at IS 'Timestamp when form was submitted';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".ip_address IS 'IP address of the submitter';
COMMENT ON COLUMN public."1a7b1d99-2289-43b9-aec7-87ebddafd209_form_submissions".user_agent IS 'Browser user agent string';

-- End of migration
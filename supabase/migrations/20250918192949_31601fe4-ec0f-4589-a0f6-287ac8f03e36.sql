-- Create analytics tables for tracking user interactions

-- Table for tracking department accesses
CREATE TABLE public.department_analytics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  department_name text NOT NULL,
  accessed_at timestamp with time zone DEFAULT now(),
  session_id text,
  created_at timestamp with time zone DEFAULT now()
);

-- Table for tracking video plays
CREATE TABLE public.video_analytics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  video_file_name text NOT NULL,
  video_title text,
  department_name text,
  play_started_at timestamp with time zone DEFAULT now(),
  play_duration_seconds integer DEFAULT 0,
  completed boolean DEFAULT false,
  session_id text,
  created_at timestamp with time zone DEFAULT now()
);

-- Table for tracking PDF downloads
CREATE TABLE public.pdf_analytics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  pdf_title text NOT NULL,
  pdf_url text NOT NULL,
  department_name text,
  downloaded_at timestamp with time zone DEFAULT now(),
  session_id text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on all analytics tables
ALTER TABLE public.department_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.video_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdf_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies - only super admin can view analytics
CREATE POLICY "Super admin can view department analytics" 
ON public.department_analytics FOR SELECT 
USING ((auth.jwt() ->> 'email'::text) = 'luiz.ferreira@grupooscar.com.br'::text);

CREATE POLICY "Super admin can view video analytics" 
ON public.video_analytics FOR SELECT 
USING ((auth.jwt() ->> 'email'::text) = 'luiz.ferreira@grupooscar.com.br'::text);

CREATE POLICY "Super admin can view pdf analytics" 
ON public.pdf_analytics FOR SELECT 
USING ((auth.jwt() ->> 'email'::text) = 'luiz.ferreira@grupooscar.com.br'::text);

-- Allow all authenticated users to insert analytics data
CREATE POLICY "Users can insert department analytics" 
ON public.department_analytics FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert video analytics" 
ON public.video_analytics FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert pdf analytics" 
ON public.pdf_analytics FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_department_analytics_user_date ON public.department_analytics(user_id, accessed_at);
CREATE INDEX idx_department_analytics_dept_date ON public.department_analytics(department_name, accessed_at);
CREATE INDEX idx_video_analytics_user_date ON public.video_analytics(user_id, play_started_at);
CREATE INDEX idx_video_analytics_video_date ON public.video_analytics(video_file_name, play_started_at);
CREATE INDEX idx_pdf_analytics_user_date ON public.pdf_analytics(user_id, downloaded_at);
CREATE INDEX idx_pdf_analytics_title_date ON public.pdf_analytics(pdf_title, downloaded_at);
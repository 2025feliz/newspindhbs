import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zitnpdjisbqimqetpbgg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdG5wZGppc2JxaW1xZXRwYmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTcxMjUsImV4cCI6MjA1MjI3MzEyNX0.Jwwa5nsVNdGrHDWv-N1QkAzncAfei8qjFiey2NsYoiI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

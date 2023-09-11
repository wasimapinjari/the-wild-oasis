import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bclhbxxgacnrvvcwujal.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGhieHhnYWNucnZ2Y3d1amFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MDYwOTMsImV4cCI6MjAwOTk4MjA5M30.1Au7k-P6-bNDFj1ZUg0xw0IX_NtVXLFcyfUTEctwuso";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

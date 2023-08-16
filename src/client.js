import { createClient } from '@supabase/supabase-js';
const URL = 'https://nsilhuwiwvzjsomhdxjw.supabase.co';
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaWxodXdpd3Z6anNvbWhkeGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTE1NTIsImV4cCI6MjAwNzc2NzU1Mn0.T5XJIBygggQRTrSD9SEpcBtu2ZozV_RO2NpcDXMDH1k";









export const supabase = createClient(URL, API_KEY);

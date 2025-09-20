import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wuuuqnvhvrkdwmdcmulj.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXVxbnZodnJrZHdtZGNtdWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDgyMDksImV4cCI6MjA3MzkyNDIwOX0.PUZk8iT9we0EdXwAbxASxUH12a-p9DbRBxYJWMkV528'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
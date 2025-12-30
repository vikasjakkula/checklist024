import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://itrrmsoaeqrzdvizsrix.supabase.co'

const supabaseKey = process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cnJtc29hZXFyemR2aXpzcml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NDAwMzMsImV4cCI6MjA3ODIxNjAzM30.yfdkYFwyKQryozA0gr9UJLOEr5ksIAIlIHrnp8coiNw

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase };

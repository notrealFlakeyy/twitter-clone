
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://okyiaiwmehdzvxwygkki.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9reWlhaXdtZWhkenZ4d3lna2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1OTI3NzQsImV4cCI6MTk4OTE2ODc3NH0.NvZOvynYh5U3WUyFWGpzTwlG5GG_Y3kDC7DPCSXFDiY')

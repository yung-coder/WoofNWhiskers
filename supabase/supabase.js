import { createClient } from "@supabase/supabase-js";

const supbase = createClient(
  "https://mkoqckwtgsykoavjkmox.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rb3Fja3d0Z3N5a29hdmprbW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTgxNDgsImV4cCI6MjAwNTg3NDE0OH0.qx-nejLCK-U56FbZgFxGxNKYKzKqyOz8yz77CMv0LDA",
  {
    auth: { persistSession: true },
  },
);

export { supbase as supabaseClient };

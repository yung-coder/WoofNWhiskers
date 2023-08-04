import { SupabaseClient, createClient } from "@supabase/supabase-js";
import "../globals.css";

async function getData() {
  const supbase = createClient(
    "https://mkoqckwtgsykoavjkmox.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rb3Fja3d0Z3N5a29hdmprbW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyOTgxNDgsImV4cCI6MjAwNTg3NDE0OH0.qx-nejLCK-U56FbZgFxGxNKYKzKqyOz8yz77CMv0LDA",
    {
      auth: { persistSession: true },
    }
  );

  let { data, error } = await supbase.from("holder").select("name");

  console.log(error);

  return data;
}

export default async function page() {
  const result = await getData();

  console.log(result);

  return <></>;
}

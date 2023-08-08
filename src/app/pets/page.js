import { supabaseClient } from "../../../supabase/supabase";

async function getData() {

  let { data, error } = await supabaseClient.from("animal ").select("*");

  console.log(error);

  return data;
}


export default async function Page() {
  const result = await getData();
 console.log(result);

  return (
    <div>
      <h1>PETS</h1>
    </div>
  );
}

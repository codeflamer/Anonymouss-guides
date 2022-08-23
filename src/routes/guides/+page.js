import { error } from "@sveltejs/kit";
export async function load({ fetch }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const guides = await res.json();
  // console.log(guides);
  if (res.ok) {
    return {
      guides,
    };
  }

  throw error(400, "Cannot fetch data or somethinbg went wrong.");
}

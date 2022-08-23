import { error, redirect } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  // console.log(data);
  if (res.ok) {
    return {
      guide: data,
    };
  }

  throw redirect(307, "/guides");
}

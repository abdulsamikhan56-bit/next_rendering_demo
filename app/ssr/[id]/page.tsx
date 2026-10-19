
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h1>Post not found!</h1>;
  }

  const post: Post = await res.json();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Server-Side Rendering (SSR)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      <p>User ID: {post.userId}</p>
    </main>
  );
}

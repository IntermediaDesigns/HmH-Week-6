export default async function EditMessage() {
  const response = await fetch(
    `${API}/api/posts/${post.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    }
  );
  const info = await response.json();
  console.log(info);

  return (
    <button>
      📝
    </button>
  )
}

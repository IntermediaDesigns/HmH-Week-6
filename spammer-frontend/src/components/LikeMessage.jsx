import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function LikeMessage({  }) {
  const router = useRouter();

  async function like() {
    const res = await fetch(`${API_URL}/api/posts/${post.id}/likes`, {
      method: 'POST',
      cache: 'no-store',
    });
    const info = await res.json();
    if (router.isReady) {
      router.refresh();
    }
  }

  // return (<p onClick={like}>{post.likes}👍</p>);
}

import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/API_URL";

export default function LikeMessage({  }) {
  const router = useRouter();

  async function addLike() {
    const response = await fetch(`${API_URL}/api/posts/${post.id}/likes`, {
      method: 'POST',
      cache: 'no-store',
    });
    const info = await response.json();
    console.log(info);
    
    if (router.isReady) {
      router.refresh();
    }
  }

  addLike();

  // return (<p onClick={like}>{post.likes}👍</p>);
}

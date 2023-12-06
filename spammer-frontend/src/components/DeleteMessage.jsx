import { API_URL } from "@/lib/API_URL.js";

export default function DeleteMessage() {
    fetch(`${API_URL}/api/posts/${posts.id}`, {
        method: "DELETE",
      });
    return (
       
            <button>🗑️</button>
        
    );
}
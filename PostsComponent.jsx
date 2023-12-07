import { API_URL } from '@/lib/API_URL.js';
import Post from './Post.jsx';

async function GetPostsComponent() {
  const likePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}/likes`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error liking post');
    }

    // Refresh screen after liking
    window.location.reload();
  };

  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting post');
    }

    // Refresh posts after deletion
    window.location.reload();
  };

  const commentPost = async (id, comment) => {
    const response = await fetch(`${API_URL}/api/posts/${id}/comments`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    });

    if (!response.ok) {
      throw new Error('Error commenting on post');
    }

    // Refresh screen after commenting
    window.location.reload();
  };

  const response = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  const info = await response.json();
  const posts = info.posts;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={likePost} onDelete={deletePost} onComment={commentPost} />
      ))}
    </div>
  );
}

export default GetPostsComponent;

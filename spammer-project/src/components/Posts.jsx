import { API_URL } from '@/lib/API_URL.js';
import Post from './Post.jsx';

export default async function GetPostsComponent() {
  const response = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  const info = await response.json();
  const posts = info.posts;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

"use client";
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import Comments from './Comments.jsx';

function Post({ post }) {
  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting post');
    }

    // Refresh posts after deletion
    window.location.reload();
  }

  return (
    <div key={post.id}>
      <div className={styles.postsContainer}>
        <p>{post.text}</p>
        <div className={styles.emojiContainer}>
          <p className={styles.emoji}>👍</p>
          <p className={styles.emoji}>💬</p>
          <p className={styles.emoji} onClick={() => deletePost(post.id)}>🗑️</p>
          <p className={styles.emoji}>📝</p>
        </div>
      </div>

      <div>
        <Comments post={post} />
      </div>
    </div>
  );
}

export default async function GetPostsComponent() {
  const response = await fetch(`${API_URL}/api/posts`, {cache: "no-store"});
  const info = await response.json();
  const posts = info.posts;

  return (
    <div >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

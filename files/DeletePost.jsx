import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';

export default function DeletePost({ post }) {
  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting post');
    }

    window.location.reload();
  };

  return (
    <p className={styles.emoji} onClick={() => deletePost(post.id)}>
      🗑️
    </p>
  );
}

import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import Comments from './Comments.jsx';

export default async function GetPostsComponent() {
  const response = await fetch(`${API_URL}/api/posts`, {cache: "no-store"});
  const info = await response.json();
  const posts = info.posts;

  return (
    <div >
      {posts.map((post) => (
        <div key={post.id}>
          <div className={styles.postsContainer}>
            <p className={styles.posts}>{post.text}</p>
            <div className={styles.emojiContainer}>
              <p className={styles.emoji}>👍</p>
              <p className={styles.emoji}>💬</p>
              <p className={styles.emoji}>🗑️</p>
              <p className={styles.emoji}>📝</p>
            </div>
          </div>

          <div className={styles.showCommentsContainer}>
            <Comments post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

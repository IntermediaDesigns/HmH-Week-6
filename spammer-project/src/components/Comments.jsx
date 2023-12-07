import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';

export default async function GetCommentsComponent({post}) {

    const response = await fetch(`${API_URL}/api/posts/${post.id}/comments`);
    const info = await response.json();
    const comments = info.comments;
  

  return (
    <div className={styles.showCommentsContainer}>
      {comments.map((comment) => (
        <p className={styles.commentText}>🗨️ {comment.text}</p>
      ))}
      
    </div>
  );
}


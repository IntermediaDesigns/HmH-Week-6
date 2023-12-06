import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';

export default function FetchComments( {comments}) {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const response = await fetch(`${API_URL}/api/posts/af1748d5-b94f-45e1-bb53-34972df54eed/comments`);
    const info = await response.json();
    setComments(info.comments);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <DisplayComments comments={comments} />
    </div>
  );
}

function DisplayComments({ comments }) {
  return (
    <div className={styles.getCommentsContainer}>
      {comments.map((comment) => (
        <div className={styles.commentsContainer}>
          <p className={styles.comments}>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

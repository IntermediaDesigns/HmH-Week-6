'use client';
import { API_URL } from '@/lib/API_URL.js';
import { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

export default function GetCommentsComponent() {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const response = await fetch(`${API_URL}/api/posts/post.id/comments`);
    const info = await response.json();
    setComments(info.comments);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <GetComments comments={comments} />
    </div>
  );
}

function GetComments({ comments }) {
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

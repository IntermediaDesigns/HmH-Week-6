'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';
import { API_URL } from '@/lib/API_URL.js';

export default function NewComments({onNewComment}) {
       const [textComment, setTextComment] = useState('');
       const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (textComment === '') {
      setError('You must provide text in field.');
      return;
    }

    const res = await fetch(`${API_URL}/api/posts/:postId/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentstext
      }),
    });
    const info = await res.json();
    if (!info.success) {
      setError(info.error);
    } else {
      setTextComment('');
      onNewComment();
    }
  }


  return (
       <div>
       <form onSubmit={handleSubmit} className={styles.newCommentsContainer}>
         <textarea
           value={textComment}
           onChange={(e) => {
             setTextComment(e.target.value);
             setError('');
           }}
           placeholder="Post a comment?"
           className={styles.textInput}
         />
         <button className={styles.submitBtn} type='submit'>
         💬
         </button>
       </form>
       {error && <p className={styles.errorMessage}>⛔ {error}</p>}
     </div>
  )
}

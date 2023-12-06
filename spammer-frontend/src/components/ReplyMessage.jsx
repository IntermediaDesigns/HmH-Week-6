'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';
import { API_URL } from '@/lib/API_URL.js';

export default function ReplyMessage({ onReply }) {
  const [reply, setReply] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (reply === '') {
      setError('You must provide text in field.');
      return;
    }

    const res = await fetch(`${API_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reply,
      }),
    });
    const info = await res.json();
    if (!info.success) {
      setError(info.error);
    } else {
      setReply('');
      onReply();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.newReplyContainer}>
        <textarea
          value={reply}
          onChange={(e) => {
            setReply(e.target.value);
            setError('');
          }}
          placeholder="What's your message?"
          className={styles.commentInput}
        />
        <button className={styles.submitBtn} type='submit'>
          Reply
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

"use client";
import { useState } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';

export default function CommentPost({ post }) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');

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

    window.location.reload();
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    commentPost(post.id, comment);
  };

  const handleCommentClick = () => {
    console.log('Comment bubble clicked');
    setShowCommentForm(true);
    console.log('showCommentForm state after update:', showCommentForm);
  };

  const handleCancelClick = () => {
    console.log('Cancel button clicked');
    setShowCommentForm(false);
  };

  return (
    <div>
      <p className={styles.emoji} onClick={handleCommentClick}>
        💬
      </p>
      {showCommentForm && (
        <form onSubmit={handleCommentSubmit}>
          <textarea value={comment} onChange={handleCommentChange} />
          <button type='submit'>Comment</button>
          <button type='button' onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

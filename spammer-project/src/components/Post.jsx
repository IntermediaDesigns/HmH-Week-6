'use client';
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import Comments from './Comments.jsx';

// EDIT post


/// LIKE function
export default function Posts({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  
  const likePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}/likes`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error liking post');
    }

    window.location.reload();

    setLikes(likes + 1);
  };

  // DELETE function
  const deletePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting post');
    }

    window.location.reload();
  };

    // Make a comment function
  

  return (
    <div key={post.id}>
      <div className={styles.postsContainer}>
        <p>{post.text}</p>
        <div className={styles.emojiContainer}>
          <p className={styles.emoji} onClick={() => likePost(post.id)}>
            {' '}
            {likes} 👍
          </p>
          <p className={styles.emoji} >
            💬
          </p>
          
          <p className={styles.emoji} onClick={() => deletePost(post.id)}>
            🗑️
          </p>
          <p className={styles.emoji}>📝</p>
        </div>
      </div>
      
      <div>
        <Comments post={post} />
      </div>
    </div>
  );
}
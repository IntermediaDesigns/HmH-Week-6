"use client";
import { useState } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';

export default function LikePost({ post }) {
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

  return (
    <p className={styles.emoji} onClick={() => likePost(post.id)}>
      {' '}
      {likes} 👍
    </p>
  );
}

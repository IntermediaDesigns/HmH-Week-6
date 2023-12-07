'use client';
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import Comments from './Comments.jsx';


/// LIKE function
function Post({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');

  const likePost = async (id) => {
    const response = await fetch(`${API_URL}/api/posts/${id}/likes`, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error liking post');
    }
    // Refresh screen after liking
    window.location.reload();

    // Increment likes after liking
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

    // Refresh posts after deletion
    window.location.reload();
  };

  useEffect(() => {
    console.log('showCommentForm state:', showCommentForm);
  }, [showCommentForm]);

  // Make a comment function
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

    // Refresh screen after commenting
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
    <div key={post.id}>
      <div className={styles.postsContainer}>
        <p>{post.text}</p>
        <div className={styles.emojiContainer}>
          <p className={styles.emoji} onClick={() => likePost(post.id)}>
            {' '}
            {likes} 👍
          </p>
          <p className={styles.emoji} onClick={handleCommentClick}>💬</p>
          <p className={styles.emoji} onClick={() => deletePost(post.id)}>
            🗑️
          </p>
          <p className={styles.emoji}>📝</p>
        </div>
      </div>
      {showCommentForm && (
        <form onSubmit={handleCommentSubmit}>
          <textarea value={comment} onChange={handleCommentChange} />
          <button type="submit">Comment</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
      )}
      <div>
        <Comments post={post} />
      </div>
    </div>
  );
}

export default async function GetPostsComponent() {
  const response = await fetch(`${API_URL}/api/posts`, { cache: 'no-store' });
  const info = await response.json();
  const posts = info.posts;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

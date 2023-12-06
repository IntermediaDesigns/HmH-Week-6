'use client';
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import NewPosts from './NewPosts.jsx';

export default function GetPostsComponent() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch(`${API_URL}/api/posts`);
    const info = await response.json();
    setPosts(info.posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <NewPosts onNewPost={fetchPosts} />
      <GetPosts posts={posts} />
    </div>
  );
}

function GetPosts({ posts }) {
  return (
    <div className={styles.getPostsContainer}>
      {posts.map((post) => (
        <div className={styles.postsContainer}>
          <p className={styles.posts}>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

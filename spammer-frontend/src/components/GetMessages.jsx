"use client";
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import NewMessage from './NewMessage.jsx'
import LikeMessage from './LikeMessage.jsx';

export default function ParentComponent({ comments }) {
  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    const response = await fetch(`${API_URL}/api/posts`);
    const info = await response.json();
    setMessages(info.posts);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <NewMessage onNewMessage={fetchMessages} />
      <GetMessages messages={messages} />
      
    </div>
  );
}

function GetMessages({ messages }) {
  return (
    <div className={styles.getPostsContainer}>
      {messages.map((post) => (
        <div className={styles.postsContainer}>
          <p className={styles.posts}>{post.text}</p>
          <LikeMessage />
        </div>
      ))}
    </div>
  );
}

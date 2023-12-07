// EmojiContainer.jsx
"use client";
import styles from '../app/page.module.css';

export default function EmojiContainer({ deletePost }) {
  return (
    <div className={styles.emojiContainer}>
      <p className={styles.emoji}>👍</p>
      <p className={styles.emoji}>💬</p>
      <p className={styles.emoji}>🗑️</p>
      <p className={styles.emoji}>📝</p>
    </div>
  );
}

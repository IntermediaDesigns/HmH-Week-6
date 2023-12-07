"use client";
import { useState } from 'react';
import styles from '../app/page.module.css';
import Comments from './spammer-project/src/components/Comments.jsx';

function Post({ post, onLike, onDelete, onComment }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');

  const likePost = (id) => {
    onLike(id);
    setLikes(likes + 1);
  };

  const deletePost = (id) => {
    onDelete(id);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onComment(post.id, comment);
  };

  const handleCommentClick = () => {
    setShowCommentForm(true);
  };

  const handleCancelClick = () => {
    setShowCommentForm(false);
  };

  // ... existing Post component code ...
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

export default Post;

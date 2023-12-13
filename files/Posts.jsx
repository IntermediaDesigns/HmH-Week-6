'use strict';
import { API_URL } from '@/lib/API_URL.js';
import styles from '../app/page.module.css';
import Comments from '../spammer-project/src/components/Comments.jsx';
import LikePost from '../../../files/LikePost.jsx/index.js';
import DeletePost from '../../../files/DeletePost.jsx/index.js';
import CommentPost from '../../../files/CommentPost.jsx/index.js';


function Post({ post }) {
  return (
    <div key={post.id}>
      <div className={styles.postsContainer}>
        <p>{post.text}</p>
        <div className={styles.emojiContainer}>
          <LikePost post={post} />
          <CommentPost post={post} />
          <DeletePost post={post} />
          <p className={styles.emoji}>📝</p>
        </div>
      </div>
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

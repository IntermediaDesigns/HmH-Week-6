
import GetPosts from '@/components/Posts.jsx'
import styles from './page.module.css'
import GetCommentsComponent from '@/components/Comments.jsx'

export default function Home() {
  return (
    <>
      <h1 className={styles.spammerTitle}>Spammer</h1>

      <GetPosts />
      <GetCommentsComponent />
    </>
  )
}

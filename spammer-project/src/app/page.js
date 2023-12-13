import Posts from '@/components/Posts.jsx'
import styles from './page.module.css'
import NewPosts from '@/components/NewPosts.jsx'


export default function Home() {
  return (
    <>
      <h1 className={styles.spammerTitle}>Spammer</h1>
      <NewPosts />
      <Posts />
     
    </>
  )
}

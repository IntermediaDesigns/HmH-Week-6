
import PostMessage from '@/components/GetMessages.jsx'
import styles from './page.module.css'
import GetMessages from '@/components/GetMessages.jsx'
import NewMessage from '@/components/NewMessage.jsx'

export default function Home() {
  return (
    <>
    <h1 className={styles.spammerTitle}>Spammer</h1>


      <GetMessages />
      

    <div>
      <div className={styles.messageContainer}></div>
      <div className={styles.replyContainer}></div>
      <div className={styles.replyToReplyContainer}></div>
    </div>
      
    </>
  )
}
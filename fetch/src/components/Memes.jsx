import styles from '../app/page.module.css';

export default async function Memes() {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  const memes = data.data.memes;

  return (
    <div>
      <div className={styles.memeContainer}>
        {memes.map((meme) => {
          return (
            <div className={styles.memeImgContainer} key={meme.id}>
              <img className={styles.meme} src={meme.url} alt='meme' />
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

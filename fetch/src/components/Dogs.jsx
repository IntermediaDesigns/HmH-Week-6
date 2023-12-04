import styles from '../app/page.module.css';

export default async function Dogs() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const info = await response.json();
  const dogs = info.message;

  return (
    <div>
      <h1>Can you catch them all?</h1>
      <h3>Dogs</h3>
      <div className={styles.dogContainer}>
        {dogs.map((dog) => {
          return (
            <div className={styles.imgContainer} key={dog}>
              <img className={styles.dog} src={dog} alt='dog' />
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

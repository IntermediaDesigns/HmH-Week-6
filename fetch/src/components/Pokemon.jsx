import styles from '../app/page.module.css';

export default async function Pokemon() {
  return (
    <>
      <h3>Pokemon</h3>
      <p>
        Search for your pokemon.
      </p>

      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type='search'
          placeholder='Enter Pokemon name..'
        />
        <button className={styles.searchBtn} type='submit'>
          Search
        </button>
      </div>

      <div className={styles.pokeContainer}>


        
      </div>

      <hr />
    </>
  );
}

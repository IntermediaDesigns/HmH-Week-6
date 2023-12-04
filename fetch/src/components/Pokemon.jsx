'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + search);

    if (response.ok) {
      const info = await response.json();
      const imageUrl = info.sprites.other['official-artwork'].front_default;
      setPokemon([{ ...info, imageUrl }]);
      setSearch('');
    } else {
      alert('Check Pokemon name');
    }
  };

  return (
    <>
      <h3>Pokemon</h3>
      <p>Search for your pokemon.</p>

      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type='search'
          placeholder='Enter Pokemon name..'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className={styles.searchBtn}
          type='submit'
          onClick={fetchPokemon}
        >
          Search
        </button>
      </div>

      <div className={styles.pokeContainer}>
        {pokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <h4>{pokemon.name}</h4>
              <div className={styles.pokeImgContainer}>
                <img
                  className={styles.pokemon}
                  src={pokemon.imageUrl}
                  alt='pokemon'
                />
              </div>
            </div>
          );
        })}
      </div>

      <hr />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import './task3.css';

// URL API GraphQL
const endpoint = 'https://rickandmortyapi.com/graphql';

const client = new GraphQLClient(endpoint);

// Запит для отримання епізодів
const EPISODES_QUERY = gql`
  query episodes {
    episodes(page: 1) {
      results {
        name
        air_date
        characters {
          name
        }
      }
    }
  }
`;

// Запит для отримання персонажів
const CHARACTERS_QUERY = gql`
  query characters {
    characters(page: 1) {
      results {
        name
        gender
        image
        episode {
          name
          air_date
        }
      }
    }
  }
`;

// Компонент для відображення інформації про один епізод
const Episode = ({ name, air_date, characters }) => (
  <div className="episode">
    <h3>{name}</h3>
    <p><strong>Air Date:</strong> {air_date}</p>
    <p><strong>Characters:</strong> {characters.map(char => char.name).join(', ')}</p>
  </div>
);

// Компонент для відображення списку епізодів
const Episodes = ({ episodes }) => (
  <div className="episodes">
    {episodes.map((episode, index) => (
      <Episode key={index} {...episode} />
    ))}
  </div>
);

// Компонент для відображення інформації про одного персонажа
const Character = ({ name, gender, image, episode }) => (
  <div className="character">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p><strong>Gender:</strong> {gender}</p>
    <p><strong>Episodes:</strong> {episode.map(ep => ep.name).join(', ')}</p>
  </div>
);

// Компонент для відображення списку персонажів
const Characters = ({ characters }) => (
  <div className="characters">
    {characters.map((character, index) => (
      <Character key={index} {...character} />
    ))}
  </div>
);

// Основний компонент програми
const Task3 = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Отримання даних про епізоди
    client.request(EPISODES_QUERY).then(data => setEpisodes(data.episodes.results));

    // Отримання даних про персонажів
    client.request(CHARACTERS_QUERY).then(data => setCharacters(data.characters.results));
  }, []);

  return (
    <div className="app">
      <h1>Rick and Morty Data</h1>
      <h2>Episodes</h2>
      <Episodes episodes={episodes} />
      <h2>Characters</h2>
      <Characters characters={characters} />
    </div>
  );
};

export default Task3;

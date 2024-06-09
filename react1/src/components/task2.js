import React, { useState, useEffect } from 'react';

// компонент для відображення персонажа
const CharacterRow = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h2>{name}</h2>
    <p><strong>Height:</strong> {height}</p>
    <p><strong>Mass:</strong> {mass}</p>
    {hair_color !== 'n/a' && hair_color !== 'none' && (
      <p><strong>Hair Color:</strong> {hair_color}</p>
    )}
    <p><strong>Skin Color:</strong> {skin_color}</p>
    <p><strong>Eye Color:</strong> <span style={{ color: eye_color }}>{eye_color}</span></p>
    <p><strong>Birth Year:</strong> {birth_year}</p>
    {gender !== 'n/a' && (
      <p><strong>Gender:</strong> {gender}</p>
    )}
  </div>
);

// компонент для відображення списку персонажів
const CharacterList = ({ characters }) => (
  <div>
    {characters.map((character, index) => (
      <CharacterRow key={index} {...character} />
    ))}
  </div>
);

// основний компонент програми
const Task2 = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);  // Присвоюємо масив даних у стан
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Task2;

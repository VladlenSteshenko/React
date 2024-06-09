// src/components/task1.js

import React, { useState, useEffect } from "react";

// компонент для відображення даних
const DataRow = ({ Year, Population }) => (
  <tr>
    <td>{Year}</td>
    <td>{Population.toLocaleString()}</td>
  </tr>
);

// компонент для відображення таблиці даних
const DataTable = ({ data }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Year</th>
        <th>Population</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <DataRow key={index} Year={item.Year} Population={item.Population} />
      ))}
    </tbody>
  </table>
);

// Основний компонент програми
const Task1 = () => {
  // Присвоювання масиву даних, завантаженого з API
  const [data, setData] = useState([]);

  // Використання useEffect для завантаження даних з API під час монтування компонента
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data); // Присвоюємо масив даних у стан
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Population Data</h1>
      <DataTable data={data} />
    </div>
  );
};

export default Task1;

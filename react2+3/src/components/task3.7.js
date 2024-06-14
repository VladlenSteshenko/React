import React, { useState } from "react";

const Phonebook = () => {
  const [phones, setPhones] = useState([""]); // Використовуємо стан для зберігання списку номерів телефонів

  const handleAddPhone = () => {
    const newPhones = [...phones, ""]; // Додаємо нове поле для номера телефону
    setPhones(newPhones);
  };

  const handleDeletePhone = (index) => {
    const newPhones = phones.filter((phone, i) => i !== index); // Видаляємо поле для номера телефону за індексом
    setPhones(newPhones);
  };

  const handleChangePhone = (index, value) => {
    const newPhones = [...phones];
    newPhones[index] = value; // Оновлюємо значення номера телефону за індексом
    setPhones(newPhones);
  };

  const handleMovePhone = (index, direction) => {
    if (direction === "up" && index > 0) {
      const newPhones = [...phones];
      const temp = newPhones[index];
      newPhones[index] = newPhones[index - 1];
      newPhones[index - 1] = temp; // Переміщаємо поле для номера телефону вгору
      setPhones(newPhones);
    } else if (direction === "down" && index < phones.length - 1) {
      const newPhones = [...phones];
      const temp = newPhones[index];
      newPhones[index] = newPhones[index + 1];
      newPhones[index + 1] = temp; // Переміщаємо поле для номера телефону вниз
      setPhones(newPhones);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {phones.map((phone, index) => (
        <div key={index}>
          <input
            type="text"
            value={phone}
            onChange={(e) => handleChangePhone(index, e.target.value)}
          />
          <button onClick={() => handleMovePhone(index, "up")}>↑</button>
          <button onClick={() => handleMovePhone(index, "down")}>↓</button>
          <button onClick={() => handleDeletePhone(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddPhone}>Add Phone</button>
    </div>
  );
};

export default Phonebook;

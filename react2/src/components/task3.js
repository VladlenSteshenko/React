import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(login, password);
    }
  };

  const isDisabled = login.length === 0 || password.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={handleLoginChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <button type="submit" disabled={isDisabled}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

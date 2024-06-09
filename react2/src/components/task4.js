import React, { useState } from "react";

const PasswordConfirm = ({ min = 2 }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length < min) {
      setError(`Password must be at least ${min} characters long.`);
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const isInvalid = error !== "";

  return (
    <div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ border: isInvalid ? "5px solid red" : "" }}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ border: isInvalid ? "5px solid red" : "" }}
          />
        </label>
      </div>
      {isInvalid && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default PasswordConfirm;

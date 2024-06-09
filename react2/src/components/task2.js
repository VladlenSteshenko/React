import React, { useState } from 'react';

const RangeInput = ({ min, max, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const isInvalid = value.length <= min || value.length >= max;
  const inputStyle = isInvalid ? { border: '5px solid red' } : {};

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      style={inputStyle}
    />
  );
};

export default RangeInput;

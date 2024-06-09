import React, { useState } from 'react';

const Spoiler = ({ header = "+", open = false, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
        {header}
      </div>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Spoiler;

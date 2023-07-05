import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/logout');
  };

  return (
    <div>
      <h2>وارد شدید</h2>
      <button onClick={handleButtonClick}>خروج</button>
    </div>
  );
};

export default MyComponent;

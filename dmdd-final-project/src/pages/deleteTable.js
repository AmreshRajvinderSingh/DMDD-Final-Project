import React, { useState } from 'react';
import './PageStyle.css'; // Import the CSS file

import DeleteProfitAndLoss from '../components/deleteProfitLoss';

const DeletePage = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 'DeleteData':
        return <DeleteProfitAndLoss />;
 
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <button className="addButton" onClick={() => handleButtonClick('DeleteData')}>
          Delete Data
        </button>

      </div>
      {renderComponent()}
    </div>
  );
};

export default DeletePage;

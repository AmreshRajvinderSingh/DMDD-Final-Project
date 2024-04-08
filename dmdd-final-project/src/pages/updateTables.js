import React, { useState } from 'react';
import './PageStyle.css'; // Import the CSS file

import UpdateOrder from '../components/updateOrder';
import UpdateProduct from '../components/updateProduct';
import UpdateShipment from '../components/updateShipment';
import UpdateSupplier from '../components/updateSupplier';
import UpdateWarehouse from '../components/updateWarehouse';

const UpdateTables = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 'UpdateOrder':
        return <UpdateOrder />;
      case 'UpdateProduct':
        return <UpdateProduct />;

      case 'UpdateShipment':
        return <UpdateShipment />;
      case 'UpdateSupplier':
        return <UpdateSupplier />;
      case 'UpdateWarehouse':
            return <UpdateWarehouse />;   

      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <button className="addButton" onClick={() => handleButtonClick('UpdateOrder')}>
          Update Order
        </button>
        <button className="addButton" onClick={() => handleButtonClick('UpdateProduct')}>
          Update Product
        </button>
        <button className="addButton" onClick={() => handleButtonClick('UpdateShipment')}>
          Update Shipment
        </button>
        <button className="addButton" onClick={() => handleButtonClick('UpdateSupplier')}>
          Update Supplier
        </button>
        <button className="addButton" onClick={() => handleButtonClick('UpdateWarehouse')}>
          Update Warehouse
        </button>
    
      </div>
      {renderComponent()}
    </div>
  );
};

export default UpdateTables;

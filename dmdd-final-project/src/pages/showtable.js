import React, { useState } from 'react';
import './PageStyle.css'; // Import the CSS file


import OrderDetailsTable from '../components/oderDetails';
import OrderTable from '../components/getOrders';
import ProductTable from '../components/getProduct';
import ShipmentTable from '../components/getShipments';

const ShowTables = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 'Order':
        return <OrderTable />;
      case 'Product':
        return <ProductTable />;

      case 'Shipment':
        return <ShipmentTable />;
      case 'OrderDetails':
        return <OrderDetailsTable />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <button className="addButton" onClick={() => handleButtonClick('Order')}>
          Order
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Product')}>
          Product
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Shipment')}>
          Shipment
        </button>
        <button className="addButton" onClick={() => handleButtonClick('OrderDetails')}>
          Order Details
        </button>
    
      </div>
      {renderComponent()}
    </div>
  );
};

export default ShowTables;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockTable.css'; // Import the CSS file

const StockTable = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/stocks');
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="stockTableContainer">
      <h3>Stocks</h3>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Stock ID</th>
              <th>Product ID</th>
              <th>Warehouse ID</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.StockID}>
                <td>{stock.StockID}</td>
                <td>{stock.Product_ID}</td>
                <td>{stock.WarehouseID}</td>
                <td>{stock.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SalesTable.css'; // Import the CSS file

const SalesTable = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/sales');
        setSales(response.data);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="salesTableContainer">
      <h3>Sales</h3>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Sale ID</th>
              <th>Order ID</th>
              <th>Product ID</th>
              <th>Quantity Sold</th>
              <th>Selling Price</th>
              <th>Sale Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.SaleID}>
                <td>{sale.SaleID}</td>
                <td>{sale.OrderID}</td>
                <td>{sale.ProductID}</td>
                <td>{sale.QuantitySold}</td>
                <td>${sale.SellingPrice.toFixed(2)}</td>
                <td>{new Date(sale.SaleDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
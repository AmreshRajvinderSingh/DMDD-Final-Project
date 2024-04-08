import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderTable.css'; // Import the CSS file

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orderTableContainer">
      <h3>Orders</h3>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Employee ID</th>
              <th>Shipped Date</th>
              <th>Shipping Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.Order_ID}>
                <td>{order.OrderID}</td>
                <td>{order.CustomerID}</td>
                <td>{order.EmployeeID}</td>
                <td>{order.ShipDate}</td>
                <td>{order.ShippingAddress}</td>
                <td>{order.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;

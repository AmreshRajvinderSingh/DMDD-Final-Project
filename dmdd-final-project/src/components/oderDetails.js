import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './orderDetails.css'; // Import the CSS file

const OrderDetailsTable = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/order-details');
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div className="orderDetailsTableContainer">
      <h3>Order Details</h3>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Order Detail ID</th>
              <th>Order ID</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((orderDetail) => (
              <tr key={orderDetail.OrderDetailID}>
                <td>{orderDetail.OrderDetailID}</td>
                <td>{orderDetail.OrderID}</td>
                <td>{orderDetail.ProductID}</td>
                <td>{orderDetail.Quantity}</td>
                <td>${orderDetail.Price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsTable;

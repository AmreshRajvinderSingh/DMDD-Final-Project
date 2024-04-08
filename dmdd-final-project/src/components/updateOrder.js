import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './updateOrder.css'; // Import CSS file for styling
 
const UpdateOrder = () => {
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [updatedOrder, setUpdatedOrder] = useState({
    OrderID: '',
    OrderDate: '',
    ShipDate: '',
    ShippingAddress: '',
    Status: ''
  });
 
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
  }, [orders]); // Re-fetch orders when orders state changes
 
  const handleEdit = (order) => {
    setEditOrder(order);
    setUpdatedOrder({
      OrderID: order.OrderID,
      OrderDate: order.OrderDate,
      ShipDate: order.ShipDate,
      ShippingAddress: order.ShippingAddress,
      Status: order.Status
    });
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOrder({ ...updatedOrder, [name]: value });
  };
 
  const handleCancelEdit = () => {
    setEditOrder(null);
    setUpdatedOrder({
      OrderID: '',
      OrderDate: '',
      ShipDate: '',
      ShippingAddress: '',
      Status: ''
    });
  };
 
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2507/api/orders`, updatedOrder);
      console.log('Order updated:', response.data);
 
      // Update orders state to reflect the changes
      const updatedOrders = orders.map(order => {
        if (order.OrderID === updatedOrder.OrderID) {
          return { ...order, ...updatedOrder };
        }
        return order;
      });
 
      setOrders(updatedOrders); // Update orders state
      setEditOrder(null);
      alert('Order updated successfully!');
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order. Please try again.');
    }
  };
 
  return (
<div className="update-order-container">
<h3>Orders</h3>
<div className="table-container">
<table className="table">
<thead>
<tr>
<th>Order ID</th>
<th>Order Date</th>
<th>Ship Date</th>
<th>Shipping Address</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
            {orders.map((order) => (
<tr key={order.OrderID}>
<td>{order.OrderID}</td>
<td>{editOrder && editOrder.OrderID === order.OrderID ?
<input type="text" name="OrderDate" value={updatedOrder.OrderDate} onChange={handleChange} />
                  : order.OrderDate}</td>
<td>{editOrder && editOrder.OrderID === order.OrderID ?
<input type="text" name="ShipDate" value={updatedOrder.ShipDate} onChange={handleChange} />
                  : order.ShipDate}</td>
<td>{editOrder && editOrder.OrderID === order.OrderID ?
<input type="text" name="ShippingAddress" value={updatedOrder.ShippingAddress} onChange={handleChange} />
                  : order.ShippingAddress}</td>
<td>{editOrder && editOrder.OrderID === order.OrderID ?
<input type="text" name="Status" value={updatedOrder.Status} onChange={handleChange} />
                  : order.Status}</td>
<td>
                  {editOrder && editOrder.OrderID === order.OrderID ? (
<>
<button className="btn btn-success" onClick={handleUpdate}>Save</button>
<button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
</>
                  ) : (
<button className="btn btn-primary" onClick={() => handleEdit(order)}>Edit</button>
                  )}
</td>
</tr>
            ))}
</tbody>
</table>
</div>
</div>
  );
};
 
export default UpdateOrder;
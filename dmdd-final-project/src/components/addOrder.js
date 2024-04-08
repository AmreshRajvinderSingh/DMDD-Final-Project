import { useState } from 'react';
import axios from 'axios';
import './AddOrderStyles.css'; // Make sure to import the CSS file
 
const AddOrder = () => {
  const [formData, setFormData] = useState({
    OrderID: '',
    CustomerID: '',
    EmployeeID: '',
    OrderDate: '',
    ShipDate: '',
    ShippingAddress: '',
    Status: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2507/api/orders', formData);
      console.log('Order created:', response.data);
      setFormData({
        OrderID: '',
        CustomerID: '',
        EmployeeID: '',
        OrderDate: '',
        ShipDate: '',
        ShippingAddress: '',
        Status: '',
      });
      alert('Order added successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to add order. Please try again.');
    }
  };
 
  return (
<div className="form-container">
<section className="form-section">
<h3 className="form-title">Add Order</h3>
<form onSubmit={handleSubmit} className="form-layout">
          {/* Input fields for OrderID */}
<div className="form-row">
<label htmlFor="orderID" className="form-label">
              Order ID
</label>
<input
              type="text"
              className="form-control"
              id="orderID"
              name="OrderID"
              value={formData.OrderID}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for CustomerID */}
<div className="form-row">
<label htmlFor="customerID" className="form-label">
              Customer ID
</label>
<input
              type="text"
              className="form-control"
              id="customerID"
              name="CustomerID"
              value={formData.CustomerID}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for EmployeeID */}
<div className="form-row">
<label htmlFor="employeeID" className="form-label">
              Employee ID
</label>
<input
              type="text"
              className="form-control"
              id="employeeID"
              name="EmployeeID"
              value={formData.EmployeeID}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for OrderDate */}
<div className="form-row">
<label htmlFor="orderDate" className="form-label">
              Order Date
</label>
<input
              type="date"
              className="form-control"
              id="orderDate"
              name="OrderDate"
              value={formData.OrderDate}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for ShipDate */}
<div className="form-row">
<label htmlFor="shipDate" className="form-label">
              Shipping Date
</label>
<input
              type="date"
              className="form-control"
              id="shipDate"
              name="ShipDate"
              value={formData.ShipDate}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for ShippingAddress */}
<div className="form-row">
<label htmlFor="shippingAddress" className="form-label">
              Shipping Address
</label>
<textarea
              className="form-control"
              id="shippingAddress"
              name="ShippingAddress"
              value={formData.ShippingAddress}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Input fields for Status */}
<div className="form-row">
<label htmlFor="status" className="form-label">
              Status
</label>
<input
              type="text"
              className="form-control"
              id="status"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              required
            />
</div>
 
          {/* Submit button */}
<div className="form-submit">
<button type="submit" className="btn-primary">
              Add Order
</button>
</div>
</form>
</section>
</div>
  );
};
 
export default AddOrder;
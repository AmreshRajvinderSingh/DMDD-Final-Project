import { useState } from 'react';
import axios from 'axios';

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
      // Optionally reset the form after successful submission
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
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10%' }}>
      <section>
        <h3>Add Order</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="orderID" className="form-label" style={{ minWidth: '120px' }}>
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
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="customerID" className="form-label" style={{ minWidth: '120px' }}>
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
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="employeeID" className="form-label" style={{ minWidth: '120px' }}>
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
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="orderDate" className="form-label" style={{ minWidth: '120px' }}>
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
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="shipDate" className="form-label" style={{ minWidth: '120px' }}>
              Ship Date
            </label>
            <input
              type="date"
              className="form-control"
              id="shipDate"
              name="ShipDate"
              value={formData.ShipDate}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="shippingAddress" className="form-label" style={{ minWidth: '120px' }}>
              Shipping Address
            </label>
            <input
              type="text"
              className="form-control"
              id="shippingAddress"
              name="ShippingAddress"
              value={formData.ShippingAddress}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="status" className="form-label" style={{ minWidth: '120px' }}>
              Status
            </label>
            <select
              className="form-control"
              id="status"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            >
              <option value="">Select Status</option>
              <option value="Shipped">Shipped</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '200px' }}>
              Add Order
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddOrder;

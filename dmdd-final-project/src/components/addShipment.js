import React, { useState } from 'react';
import axios from 'axios';
import './AddShipmentStyles.css'; // Import the updated CSS file
 
const AddShipment = () => {
  const [formData, setFormData] = useState({
    ShipmentID: '',
    OrderID: '',
    ShippedDate: '',
    EstimatedArrivalDate: '',
    Carrier: '',
    TrackingNumber: '',
    Status: 'Pending', // Default status
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2507/api/shipments', formData);
      console.log('Shipment created:', response.data);
      setFormData({
        ShipmentID: '',
        OrderID: '',
        ShippedDate: '',
        EstimatedArrivalDate: '',
        Carrier: '',
        TrackingNumber: '',
        Status: 'Pending', // Reset status to default
      });
      alert('Shipment added successfully!');
    } catch (error) {
      console.error('Error creating shipment:', error);
      alert('Failed to add shipment. Please try again.');
    }
  };
 
  return (
    <div className="form-container">
      <section className="form-section">
        <h3 className="form-title">Add Shipment</h3>
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="shipmentID"
              name="ShipmentID"
              placeholder="Shipment ID"
              value={formData.ShipmentID}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="orderID"
              name="OrderID"
              placeholder="Order ID"
              value={formData.OrderID}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="date"
              className="form-control"
              id="shippedDate"
              name="ShippedDate"
              placeholder="Shipped Date"
              value={formData.ShippedDate}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="date"
              className="form-control"
              id="estimatedArrivalDate"
              name="EstimatedArrivalDate"
              placeholder="Estimated Arrival Date"
              value={formData.EstimatedArrivalDate}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="carrier"
              name="Carrier"
              placeholder="Carrier"
              value={formData.Carrier}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="trackingNumber"
              name="TrackingNumber"
              placeholder="Tracking Number"
              value={formData.TrackingNumber}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <select
              className="form-control"
              id="status"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
 
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Add Shipment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
 
export default AddShipment;
 
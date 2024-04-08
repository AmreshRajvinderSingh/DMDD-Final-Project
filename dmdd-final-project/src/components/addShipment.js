import React, { useState } from 'react';
import axios from 'axios';

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
      // Reset form after successful submission
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
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
      <section style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Shipment</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="shipmentID" style={{ minWidth: '120px' }}>Shipment ID</label>
            <input
              type="text"
              id="shipmentID"
              name="ShipmentID"
              value={formData.ShipmentID}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="orderID" style={{ minWidth: '120px' }}>Order ID</label>
            <input
              type="text"
              id="orderID"
              name="OrderID"
              value={formData.OrderID}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="shippedDate" style={{ minWidth: '120px' }}>Shipped Date</label>
            <input
              type="date"
              id="shippedDate"
              name="ShippedDate"
              value={formData.ShippedDate}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="estimatedArrivalDate" style={{ minWidth: '120px' }}>Estimated Arrival Date</label>
            <input
              type="date"
              id="estimatedArrivalDate"
              name="EstimatedArrivalDate"
              value={formData.EstimatedArrivalDate}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="carrier" style={{ minWidth: '120px' }}>Carrier</label>
            <input
              type="text"
              id="carrier"
              name="Carrier"
              value={formData.Carrier}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="trackingNumber" style={{ minWidth: '120px' }}>Tracking Number</label>
            <input
              type="text"
              id="trackingNumber"
              name="TrackingNumber"
              value={formData.TrackingNumber}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="status" style={{ minWidth: '120px' }}>Status</label>
            <select
              id="status"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            >
              <option value="Pending">Pending</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Add Shipment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddShipment;

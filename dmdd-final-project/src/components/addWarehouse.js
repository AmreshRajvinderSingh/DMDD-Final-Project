import React, { useState } from 'react';
import axios from 'axios';
import './AddWarehouseStyles.css'; // Import the updated CSS file
 
const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    WarehouseID: '',
    Location: '',
    Address: '',
    City: '',
    Country: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:2507/api/warehouses', formData);
      console.log('Warehouse created:', response.data);
      // Reset form after successful submission
      setFormData({
        WarehouseID: '',
        Location: '',
        Address: '',
        City: '',
        Country: '',
      });
      alert('Warehouse added successfully!');
    } catch (error) {
      console.error('Error creating warehouse:', error);
      alert('Failed to add warehouse. Please try again.');
    }
  };
 
  return (
<div className="form-container">
<section className="form-section">
<h3 className="form-title">Add Warehouse</h3>
<form onSubmit={handleSubmit} className="form-layout">
<div className="form-row">
<input
              type="text"
              className="form-control"
              id="warehouseID"
              name="WarehouseID"
              placeholder="Warehouse ID"
              value={formData.WarehouseID}
              onChange={handleChange}
              required
            />
</div>
 
          <div className="form-row">
<input
              type="text"
              className="form-control"
              id="location"
              name="Location"
              placeholder="Location"
              value={formData.Location}
              onChange={handleChange}
              required
            />
</div>
 
          <div className="form-row">
<input
              type="text"
              className="form-control"
              id="address"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              required
            />
</div>
 
          <div className="form-row">
<input
              type="text"
              className="form-control"
              id="city"
              name="City"
              placeholder="City"
              value={formData.City}
              onChange={handleChange}
              required
            />
</div>
 
          <div className="form-row">
<input
              type="text"
              className="form-control"
              id="country"
              name="Country"
              placeholder="Country"
              value={formData.Country}
              onChange={handleChange}
              required
            />
</div>
 
          <div className="form-submit">
<button type="submit" className="btn-primary">
              Add Warehouse
</button>
</div>
</form>
</section>
</div>
  );
};
 
export default AddWarehouse;
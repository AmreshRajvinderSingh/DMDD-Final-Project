import React, { useState } from 'react';
import axios from 'axios';

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
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
      <section style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Warehouse</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="warehouseID" style={{ minWidth: '120px' }}>Warehouse ID</label>
            <input
              type="text"
              id="warehouseID"
              name="WarehouseID"
              value={formData.WarehouseID}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="location" style={{ minWidth: '120px' }}>Location</label>
            <input
              type="text"
              id="location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="address" style={{ minWidth: '120px' }}>Address</label>
            <input
              type="text"
              id="address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="city" style={{ minWidth: '120px' }}>City</label>
            <input
              type="text"
              id="city"
              name="City"
              value={formData.City}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="country" style={{ minWidth: '120px' }}>Country</label>
            <input
              type="text"
              id="country"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Add Warehouse
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddWarehouse;

import React, { useState } from 'react';
import axios from 'axios';

const AddSupplier = () => {
  const [formData, setFormData] = useState({
    SupplierID: '',
    CompanyName: '',
    ContactName: '',
    Address: '',
    City: '',
    Country: '',
    Phone: '',
    Email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2507/api/suppliers', formData);
      console.log('Supplier created:', response.data);
      // Reset form after successful submission
      setFormData({
        SupplierID: '',
        CompanyName: '',
        ContactName: '',
        Address: '',
        City: '',
        Country: '',
        Phone: '',
        Email: '',
      });
      alert('Supplier added successfully!');
    } catch (error) {
      console.error('Error creating supplier:', error);
      alert('Failed to add supplier. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
      <section style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Supplier</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="supplierID" style={{ minWidth: '120px' }}>Supplier ID</label>
            <input
              type="text"
              id="supplierID"
              name="SupplierID"
              value={formData.SupplierID}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="companyName" style={{ minWidth: '120px' }}>Company Name</label>
            <input
              type="text"
              id="companyName"
              name="CompanyName"
              value={formData.CompanyName}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="contactName" style={{ minWidth: '120px' }}>Contact Name</label>
            <input
              type="text"
              id="contactName"
              name="ContactName"
              value={formData.ContactName}
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="phone" style={{ minWidth: '120px' }}>Phone</label>
            <input
              type="text"
              id="phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="email" style={{ minWidth: '120px' }}>Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              style={{ flex: '1', marginLeft: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Add Supplier
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddSupplier;

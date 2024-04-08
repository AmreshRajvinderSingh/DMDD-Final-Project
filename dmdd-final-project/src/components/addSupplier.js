import React, { useState } from 'react';
import axios from 'axios';
import './AddSupplierStyles.css'; // Import the updated CSS file
 
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
    <div className="form-container">
      <section className="form-section">
        <h3 className="form-title">Add Supplier</h3>
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="supplierID"
              name="SupplierID"
              placeholder="Supplier ID"
              value={formData.SupplierID}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="CompanyName"
              placeholder="Company Name"
              value={formData.CompanyName}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="contactName"
              name="ContactName"
              placeholder="Contact Name"
              value={formData.ContactName}
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
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="Phone"
              placeholder="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="email"
              className="form-control"
              id="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Add Supplier
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
 
export default AddSupplier;
 
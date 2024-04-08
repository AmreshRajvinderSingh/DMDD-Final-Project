import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateSupplier.css'; // Import CSS file for styling

const UpdateSupplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [editSupplier, setEditSupplier] = useState(null);
  const [updatedSupplier, setUpdatedSupplier] = useState({
    SupplierID: '',
    CompanyName: '',
    ContactName: '',
    Address: '',
    City: '',
    Country: '',
    Phone: '',
    Email: ''
  });

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/suppliers');
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
      }
    };

    fetchSuppliers();
  }, []); // Empty dependency array to fetch once on component mount

  const handleEdit = (supplier) => {
    setEditSupplier(supplier);
    setUpdatedSupplier({
      SupplierID: supplier.SupplierID,
      CompanyName: supplier.CompanyName,
      ContactName: supplier.ContactName,
      Address: supplier.Address,
      City: supplier.City,
      Country: supplier.Country,
      Phone: supplier.Phone,
      Email: supplier.Email
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSupplier({ ...updatedSupplier, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditSupplier(null);
    setUpdatedSupplier({
      SupplierID: '',
      CompanyName: '',
      ContactName: '',
      Address: '',
      City: '',
      Country: '',
      Phone: '',
      Email: ''
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2507/api/suppliers`, updatedSupplier);
      console.log('Supplier updated:', response.data);

      // Update the specific supplier in the state array
      const updatedSuppliers = suppliers.map(supplier => {
        if (supplier.SupplierID === updatedSupplier.SupplierID) {
          return { ...supplier, ...updatedSupplier };
        }
        return supplier;
      });

      setSuppliers(updatedSuppliers); // Update only the modified supplier
      setEditSupplier(null);
      alert('Supplier updated successfully!');
    } catch (error) {
      console.error('Error updating supplier:', error);
      alert('Failed to update supplier. Please try again.');
    }
  };

  return (
    <div className="update-supplier-container">
      <h3>Suppliers</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Supplier ID</th>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.SupplierID}>
                <td>{supplier.SupplierID}</td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="CompanyName" value={updatedSupplier.CompanyName} onChange={handleChange} />
                    : supplier.CompanyName}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="ContactName" value={updatedSupplier.ContactName} onChange={handleChange} />
                    : supplier.ContactName}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="Address" value={updatedSupplier.Address} onChange={handleChange} />
                    : supplier.Address}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="City" value={updatedSupplier.City} onChange={handleChange} />
                    : supplier.City}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="Country" value={updatedSupplier.Country} onChange={handleChange} />
                    : supplier.Country}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="Phone" value={updatedSupplier.Phone} onChange={handleChange} />
                    : supplier.Phone}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ?
                    <input type="text" name="Email" value={updatedSupplier.Email} onChange={handleChange} />
                    : supplier.Email}
                </td>
                <td>
                  {editSupplier && editSupplier.SupplierID === supplier.SupplierID ? (
                    <>
                      <button className="btn btn-success" onClick={handleUpdate}>Save</button>
                      <button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleEdit(supplier)}>Edit</button>
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

export default UpdateSupplier;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateWarehouse.css'; // Import CSS file for styling

const UpdateWarehouse = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [editWarehouse, setEditWarehouse] = useState(null);
  const [updatedWarehouse, setUpdatedWarehouse] = useState({
    WarehouseID: '',
    Location: '',
    Address: '',
    City: '',
    Country: ''
  });

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/warehouses');
        setWarehouses(response.data);
      } catch (error) {
        console.error('Error fetching warehouses:', error);
      }
    };

    fetchWarehouses();
  }, []); // Empty dependency array to fetch once on component mount

  const handleEdit = (warehouse) => {
    setEditWarehouse(warehouse);
    setUpdatedWarehouse({
      WarehouseID: warehouse.WarehouseID,
      Location: warehouse.Location,
      Address: warehouse.Address,
      City: warehouse.City,
      Country: warehouse.Country
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedWarehouse({ ...updatedWarehouse, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditWarehouse(null);
    setUpdatedWarehouse({
      WarehouseID: '',
      Location: '',
      Address: '',
      City: '',
      Country: ''
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2507/api/warehouses`, updatedWarehouse);
      console.log('Warehouse updated:', response.data);

      // Update warehouses state to reflect the changes
      const updatedWarehouses = warehouses.map(warehouse => {
        if (warehouse.WarehouseID === updatedWarehouse.WarehouseID) {
          return { ...warehouse, ...updatedWarehouse };
        }
        return warehouse;
      });

      setWarehouses(updatedWarehouses); // Update warehouses state
      setEditWarehouse(null);
      alert('Warehouse updated successfully!');
    } catch (error) {
      console.error('Error updating warehouse:', error);
      alert('Failed to update warehouse. Please try again.');
    }
  };

  return (
    <div className="update-warehouse-container">
      <h3>Warehouses</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Warehouse ID</th>
              <th>Location</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse) => (
              <tr key={warehouse.WarehouseID}>
                <td>{warehouse.WarehouseID}</td>
                <td>
                  {editWarehouse && editWarehouse.WarehouseID === warehouse.WarehouseID ?
                    <input type="text" name="Location" value={updatedWarehouse.Location} onChange={handleChange} />
                    : warehouse.Location}
                </td>
                <td>
                  {editWarehouse && editWarehouse.WarehouseID === warehouse.WarehouseID ?
                    <input type="text" name="Address" value={updatedWarehouse.Address} onChange={handleChange} />
                    : warehouse.Address}
                </td>
                <td>
                  {editWarehouse && editWarehouse.WarehouseID === warehouse.WarehouseID ?
                    <input type="text" name="City" value={updatedWarehouse.City} onChange={handleChange} />
                    : warehouse.City}
                </td>
                <td>
                  {editWarehouse && editWarehouse.WarehouseID === warehouse.WarehouseID ?
                    <input type="text" name="Country" value={updatedWarehouse.Country} onChange={handleChange} />
                    : warehouse.Country}
                </td>
                <td>
                  {editWarehouse && editWarehouse.WarehouseID === warehouse.WarehouseID ? (
                    <>
                      <button className="btn btn-success" onClick={handleUpdate}>Save</button>
                      <button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleEdit(warehouse)}>Edit</button>
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

export default UpdateWarehouse;

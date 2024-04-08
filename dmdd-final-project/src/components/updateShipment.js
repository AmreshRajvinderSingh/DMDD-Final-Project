import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateShipment.css'; // Import CSS file for styling

const UpdateShipment = () => {
  const [shipments, setShipments] = useState([]);
  const [editShipment, setEditShipment] = useState(null);
  const [updatedShipment, setUpdatedShipment] = useState({
    ShipmentID: '',
    ShippedDate: '',
    EstimatedArrivalDate: '',
    Carrier: '',
    TrackingNumber: '',
    Status: ''
  });

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/shipments');
        setShipments(response.data);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      }
    };

    fetchShipments();
  }, [shipments]); // Re-fetch shipments when shipments state changes

  const handleEdit = (shipment) => {
    setEditShipment(shipment);
    setUpdatedShipment({
      ShipmentID: shipment.ShipmentID,
      ShippedDate: shipment.ShippedDate,
      EstimatedArrivalDate: shipment.EstimatedArrivalDate,
      Carrier: shipment.Carrier,
      TrackingNumber: shipment.TrackingNumber,
      Status: shipment.Status
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedShipment({ ...updatedShipment, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditShipment(null);
    setUpdatedShipment({
      ShipmentID: '',
      ShippedDate: '',
      EstimatedArrivalDate: '',
      Carrier: '',
      TrackingNumber: '',
      Status: ''
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2507/api/shipments`, updatedShipment);
      console.log('Shipment updated:', response.data);

      // Update shipments state to reflect the changes
      const updatedShipments = shipments.map((shipment) => {
        if (shipment.ShipmentID === updatedShipment.ShipmentID) {
          return { ...shipment, ...updatedShipment };
        }
        return shipment;
      });

      setShipments(updatedShipments); // Update shipments state
      setEditShipment(null);
      alert('Shipment updated successfully!');
    } catch (error) {
      console.error('Error updating shipment:', error);
      alert('Failed to update shipment. Please try again.');
    }
  };

  return (
    <div className="update-shipment-container">
      <h3>Shipments</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Shipped Date</th>
              <th>Estimated Arrival Date</th>
              <th>Carrier</th>
              <th>Tracking Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.ShipmentID}>
                <td>{shipment.ShipmentID}</td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <input type="date" name="ShippedDate" value={updatedShipment.ShippedDate} onChange={handleChange} />
                  ) : (
                    shipment.ShippedDate
                  )}
                </td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <input type="date" name="EstimatedArrivalDate" value={updatedShipment.EstimatedArrivalDate} onChange={handleChange} />
                  ) : (
                    shipment.EstimatedArrivalDate
                  )}
                </td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <input type="text" name="Carrier" value={updatedShipment.Carrier} onChange={handleChange} />
                  ) : (
                    shipment.Carrier
                  )}
                </td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <input type="text" name="TrackingNumber" value={updatedShipment.TrackingNumber} onChange={handleChange} />
                  ) : (
                    shipment.TrackingNumber
                  )}
                </td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <input type="text" name="Status" value={updatedShipment.Status} onChange={handleChange} />
                  ) : (
                    shipment.Status
                  )}
                </td>
                <td>
                  {editShipment && editShipment.ShipmentID === shipment.ShipmentID ? (
                    <>
                      <button className="btn btn-success" onClick={handleUpdate}>Save</button>
                      <button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleEdit(shipment)}>Edit</button>
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

export default UpdateShipment;

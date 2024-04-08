import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShipmentTable.css'; // Import the CSS file

const ShipmentTable = () => {
  const [shipments, setShipments] = useState([]);

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
  }, []);

  return (
    <div className="shipmentTableContainer">
      <h3>Shipments</h3>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Order ID</th>
              <th>Shipped Date</th>
              <th>Estimated Arrival Date</th>
              <th>Carrier</th>
              <th>Tracking Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.ShipmentID}>
                <td>{shipment.ShipmentID}</td>
                <td>{shipment.OrderID}</td>
                <td>{shipment.ShippedDate}</td>
                <td>{shipment.EstimatedArrivalDate}</td>
                <td>{shipment.Carrier}</td>
                <td>{shipment.TrackingNumber}</td>
                <td>{shipment.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentTable;

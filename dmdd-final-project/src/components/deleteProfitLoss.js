import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfitAndLoss.css'; // Import CSS file for styling
 
const DeleteProfitAndLoss = () => {
  const [profitAndLossData, setProfitAndLossData] = useState([]);
 
  useEffect(() => {
    const fetchProfitAndLossData = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/profit-loss');
        setProfitAndLossData(response.data);
      } catch (error) {
        console.error('Error fetching profit and loss data:', error);
      }
    };
 
    fetchProfitAndLossData();
  }, []); // Fetch profit and loss data only once when the component mounts
 
  const handleDelete = async (pnlId) => {
    try {
        const response = await axios.delete('http://localhost:2507/api/deletepf', {
            data: { PnLID: pnlId } // Pass PnLID in the request body
          });
      // Filter out the deleted row from profitAndLossData
      setProfitAndLossData(profitAndLossData.filter(item => item.PnLID !== pnlId));
      alert('Row deleted successfully!');
    } catch (error) {
      console.error('Error deleting row:', error);
      alert('Failed to delete row. Please try again.');
    }
  };
 
  return (
<div className="profit-and-loss-container">
<h3>Profit and Loss</h3>
<div className="table-container">
<table className="table">
<thead>
<tr>
<th>PnLID</th>
<th>Period Start Date</th>
<th>Period End Date</th>
<th>Total Revenue</th>
<th>Cost of Goods Sold</th>
<th>Operating Expenses</th>
<th>Other Income</th>
<th>Other Expenses</th>
<th>Net Profit</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
            {profitAndLossData.map((row) => (
<tr key={row.PnLID}>
<td>{row.PnLID}</td>
<td>{row.PeriodStartDate}</td>
<td>{row.PeriodEndDate}</td>
<td>{row.TotalRevenue}</td>
<td>{row.CostOfGoodsSold}</td>
<td>{row.OperatingExpenses}</td>
<td>{row.OtherIncome}</td>
<td>{row.OtherExpenses}</td>
<td>{row.NetProfit}</td>
<td>
<button className="btn btn-danger" onClick={() => handleDelete(row.PnLID)}>Delete</button>
</td>
</tr>
            ))}
</tbody>
</table>
</div>
</div>
  );
};
 
export default DeleteProfitAndLoss;
import React from 'react';
import './CSS/table.css'
function JsonToTable({ jsonData }) {
  // Check if jsonData is empty or null
  if (!jsonData) {
    return <div>No data to display.</div>;
  }

  // Assuming the JSON data is an array of objects
  const data = Array.isArray(jsonData) ? jsonData : [jsonData];

  // Extract the keys (column headers) from the first object
  const columns = Object.keys(data[0]);

  return (
    <div>
      <table className="excel-like-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonToTable;

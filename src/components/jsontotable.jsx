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
<<<<<<< HEAD
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td>{item["Sr. No"]}</td>
              <td>{item["Instruments"]}</td>
              <td>{item["Equipment ID"]}</td>
              <td>{item["Brand / Model"]}</td>
              <td>{item["Function"]}</td>
              <td>{item["Location"]}</td>
              <td>
                <a href={item[" "]} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </td>
=======
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} id={item[column] +" " +rowIndex} style={{scrollMarginTop: '160px'}}>{item[column]}</td>
              ))}
>>>>>>> 7cc18914fb9530f557e33e9f55ae96c5f7c10d26
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonToTable;

import React, { Component } from 'react';
import './CSS/service_charges.css';

class Service_Charges extends Component {
    render() {
        const data = [
            { header1: '1', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
            { header1: '2', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
            { header1: '3', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
            { header1: '4', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
            { header1: '5', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
            { header1: '6', header2: 'Data 2', header3: 'Data 3', header4: 'Data 4', header5: 'Data 5', header6: 'Data 6' },
        ];

        // Map the data to create table rows
        const tableRows = data.map((rowData, index) => (
            <tr key={index}>
                <td>{rowData.header1}</td>
                <td>{rowData.header2}</td>
                <td>{rowData.header3}</td>
                <td>{rowData.header4}</td>
                <td>{rowData.header5}</td>
                <td>{rowData.header6}</td>
            </tr>
        ));

        return (
            <div
                style={{
                    width: '100vw',
                    padding: '30px 5%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h2 className='about-us'>Service Charges</h2>
                <div className='separator_left'></div>
                <div className="my-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Instruments</th>
                                <th>Internal Charges (INR)</th>
                                <th>Charges for Universities, Institutes (INR)</th>
                                <th>Charge for Industry (INR)</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Service_Charges;

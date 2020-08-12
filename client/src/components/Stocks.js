import React from 'react';
import Table from 'react-bootstrap/Table'

function Stocks() {
    return (
        <div>
            <h1 className="align-items-center">Stocks</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Ticker</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Alert Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Stocks;

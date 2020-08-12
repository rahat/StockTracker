import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Watchlist() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item action active>AAPL</ListGroup.Item>
                <ListGroup.Item action>AMD</ListGroup.Item>
                <ListGroup.Item action>AMZN</ListGroup.Item>
                <ListGroup.Item action>FB</ListGroup.Item>
                <ListGroup.Item action>GOOG</ListGroup.Item>
                <ListGroup.Item action>IBM</ListGroup.Item>
                <ListGroup.Item action>INTC</ListGroup.Item>
                <ListGroup.Item action>MSFT</ListGroup.Item>
                <ListGroup.Item action>NFLX</ListGroup.Item>
                <ListGroup.Item action>NVDA</ListGroup.Item>
                <ListGroup.Item action>ORCL</ListGroup.Item>
                <ListGroup.Item action>SNE</ListGroup.Item>
                <ListGroup.Item action>TSLA</ListGroup.Item>
                <ListGroup.Item action>TWLO</ListGroup.Item>
                <ListGroup.Item action>TWTR</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Watchlist;

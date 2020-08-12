import React from 'react';
import Chart from './Chart';
import Watchlist from './Watchlist';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2}><Watchlist /></Col>
                    <Col xs={8}><Chart /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;

import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Chart from './Chart';
import { Container, Row, Col } from 'react-bootstrap';
import Api from '../api';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: "wss://data.alpaca.markets/stream",
            credentials: {
                "action": "authenticate",
                "data": {
                    "key_id": process.env.REACT_APP_ALPACA_ID,
                    "secret_key": process.env.REACT_APP_ALPACA_SECRET
                }
            },
            channels: {
                "action": "listen",
                "data": {
                    "streams": []
                }
            },
            symbols: [],
            bars: [],
            active: 0
        }
        this.updateChart = this.updateChart.bind(this);
    }

    componentDidMount = async () => {
        // Fetch Symbols
        await Api.listAlerts().then(alerts => {
            var stocks = [];
            for (var stock in alerts.data) {
                stocks.push((alerts.data[stock].symbol));
            }

            this.setState({
                symbols: stocks
            })
        })

        this.state.symbols.forEach((stock) => { this.state.channels.data.streams.push("AM." + stock); });
        this.updateChart(this.state.symbols[0]);
    }

    updateChart(symbol) {
        var url = process.env.REACT_APP_BASE_URL + ':5000/quotes/?symbol=' + symbol;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_ID,
                'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_SECRET
            }
        })
            .then(response => response.json())
            .then(data => {
                var seriesData = [];

                for (var bar in data[symbol]) {
                    // Push closing price along with the UNIX timestamp
                    seriesData.push({ time: data[symbol][bar]["t"], value: data[symbol][bar]["c"] });
                }

                this.setState({ bars: seriesData });
                console.log('Success:', this.state.bars);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    selectSymbol = index => {
        this.setState({ active: index });
    };

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <ListGroup>
                                {
                                    this.state.symbols.map((symbol, index) => (
                                        <ListGroup.Item action className={this.state.active === index ? "list-group-item active" : ""} onClick={() => { this.updateChart(symbol); this.selectSymbol(index); }} key={symbol}>{symbol}</ListGroup.Item>))
                                }
                            </ListGroup>
                        </Col>
                        <Col xs={8}><Chart symbol={this.state.symbols[this.state.active]} data={this.state.bars} /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

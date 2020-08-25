import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Api from '../api';

export default class EditAlert extends Component {
    constructor(props) {
        super(props);

        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeOperation = this.onChangeOperation.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAlertType = this.onChangeAlertType.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            symbol: '',
            operation: 0,
            price: 0,
            category: 0,
            active: false
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        await Api.getAlert(id)
            .then(result => {
                this.setState({
                    symbol: result.data.symbol,
                    operation: result.data.operation,
                    price: result.data.price,
                    category: result.data.category,
                    active: result.data.active
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeSymbol(e) {
        this.setState({ symbol: e.target.value })
    }

    onChangeOperation(e) {
        this.setState({ operation: e.target.value })
    }

    onChangePrice(e) {
        this.setState({ price: e.target.value })
    }

    onChangeAlertType(e) {
        this.setState({ category: e.target.value })
    }

    onChangeActive(e) {
        this.setState({ active: !this.state.active })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            symbol: this.state.symbol,
            operation: this.state.operation,
            price: this.state.price,
            category: this.state.category,
            active: this.state.active
        };

        const { id } = this.props.match.params;

        Api.updateAlert(id, obj)
            .then((res) => {
                console.log(res.data)
                console.log('Alert updated.')
            }).catch((error) => {
                console.log(error)
            })

        window.location.href = "/stocks";
    }

    render() {
        return (<div>
            <Container fluid style={{ width: '500px' }}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Symbol">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control required type="text" value={this.state.symbol} onChange={this.onChangeSymbol} />
                    </Form.Group>

                    <Form.Group controlId="Operation">
                        <Form.Label>Operation</Form.Label>
                        <Form.Control required as="select" value={this.state.operation} onChange={this.onChangeOperation}>
                            <option value="0">Prices falls below</option>
                            <option value="1">Prices rises above</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="text" value={this.state.price} onChange={this.onChangePrice} />
                    </Form.Group>

                    <Form.Group controlId="Category">
                        <Form.Label>Alert Type</Form.Label>
                        <Form.Control required as="select" value={this.state.category} onChange={this.onChangeAlertType}>
                            <option value="0">Text</option>
                            <option value="1">Email</option>
                            <option value="2">Voice</option>
                            <option value="3">Text and Email</option>
                            <option value="4">Voice and Email</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Active">
                        <Form.Check id="activeSwitch" type="switch" checked={this.state.active} label="Active" onChange={this.onChangeActive} />
                    </Form.Group>

                    <Button variant="dark" size="md" block="block" type="submit">Update Alert</Button>
                </Form>
            </Container>
        </div>)
    }
}

import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';
import { FaEdit, FaTrashAlt, FaSms, FaEnvelopeSquare, FaPhone } from "react-icons/fa";
import api from '../api';

export default class Stocks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alerts: []

        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount = async () => {
        await api.listAlerts().then(alerts => {
            this.setState({
                alerts: alerts.data
            })
        })
            .catch((error) => {
                console.log(error);
            })
    }

    handleDelete(id, e) {
        e.preventDefault();

        if (window.confirm(`Are you sure you want to delete this alert permanently?`,)) {
            api.deleteAlert(id);
            window.location.reload();
        }
    }

    displayIcon(alertType) {
        switch (alertType) {
            case 0: return <FaSms title="Text" />;
            case 1: return <FaEnvelopeSquare title="Email" />;
            case 2: return <FaPhone title="Voice" />;
            case 3: return <><FaSms title="Text" /> <FaEnvelopeSquare title="Email" /></>;
            case 4: return <><FaPhone title="Voice" /> <FaEnvelopeSquare title="Email" /></>;
            default: return "";
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Price</th>
                                <th>Alert Type</th>
                                <th>Active</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.alerts && this.state.alerts.map((alert) => (
                                    <tr key={alert._id}>
                                        <td key={alert._id + "_symbol"}>{alert.symbol}</td>
                                        <td key={alert._id + "_price"}>{`${alert.price} or ${alert.operation ? "lower" : "higher"}`}</td>
                                        <td key={alert._id + "_category"}>{this.displayIcon(alert.category)}</td>
                                        <td key={alert._id + "_active"}>{alert.active ? "Yes" : "No"}</td>
                                        <td>
                                            <Link to={`/update-alert/${alert._id}`}>
                                                <FaEdit />
                                            </Link>
                                            <Link to="/" onClick={(e) => this.handleDelete(alert._id, e)}>
                                                <FaTrashAlt />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

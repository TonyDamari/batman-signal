import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { cancelURL, config, historyURL } from "../api/api";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = {};
                const { data } = await axios.post(historyURL, info, config);
                setHistory(data.data.panics);
                toast.success(data.message);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchData();
    }, []);

    const cancelHandler = async (id) => {
        try {
            const info = {
                panic_id: id,
            };
            const { data } = await axios.post(cancelURL, info, config);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (history.length === 0) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    return (
        <Container>
            <h2 className="mb-5">Log of panic history</h2>
            <Row
                className="mb-3 p-3"
                style={{ background: "#333", color: "#fff" }}
            >
                <Col>
                    <h3>Date</h3>
                </Col>
                <Col>
                    <h3>Details</h3>
                </Col>
                <Col>
                    <h3>Latitude</h3>
                </Col>
                <Col>
                    <h3>Longitude</h3>
                </Col>
                <Col>
                    <h3>Type</h3>
                </Col>
                <Col>
                    <h3>Status</h3>
                </Col>
                <Col></Col>
            </Row>
            {history.map((item) => (
                <Row
                    key={item.id}
                    className="mb-3 p-3"
                    style={{ border: "1px solid #333" }}
                >
                    <Col>{new Date(item.created_at).toLocaleString()}</Col>
                    <Col>
                        {item.details ? item.details : <p>not provided</p>}
                    </Col>
                    <Col>{item.latitude}</Col>
                    <Col>{item.longitude}</Col>
                    <Col>
                        {item.panic_type ? (
                            item.panic_type
                        ) : (
                            <p>not provided</p>
                        )}
                    </Col>
                    <Col>{item.status.name}</Col>
                    <Col>
                        {item.status.name !== "Canceled" ? (
                            <Button
                                variant="danger"
                                onClick={() => {
                                    cancelHandler(item.id);
                                }}
                            >
                                Cancel
                            </Button>
                        ) : (
                            <Button variant="outlined" disabled>
                                Cancel
                            </Button>
                        )}
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default History;

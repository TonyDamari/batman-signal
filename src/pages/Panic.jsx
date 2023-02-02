import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config, panicURL } from "../api/api";

const Panic = () => {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [panic_type, setPanicType] = useState("");
    const [details, setDetails] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (longitude === "" || latitude === "") {
            toast.error("Starred fields required");
            return;
        }

        try {
            const { data } = await axios.post(
                panicURL,
                { longitude, latitude, panic_type, details },
                config
            );

            toast.success(data.message);

            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Container className="">
            <h1>Panic</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="longitude" className="mb-3">
                    <Form.Label>Longitude </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="latitude" className="mb-3">
                    <Form.Label>Latitude </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Longitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="panicType" className="mb-3">
                    <Form.Label>Panic Type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Panic Type"
                        value={panic_type}
                        onChange={(e) => setPanicType(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="details" className="mb-3">
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        as="textarea"
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="dark">
                    Panic
                </Button>
            </Form>
        </Container>
    );
};

export default Panic;

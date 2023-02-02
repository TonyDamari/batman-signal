import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import cancel from '../assets/cancel.png'
import batmanSignal from '../assets/batman-signal.webp'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate()

    return (
        <Container className="mt-3">
            <h1 className="mb-5">Batman Signal</h1>
            <Row>
                <Col>
                    <Card style={{ width: "18rem" }} border="danger" >
                        <Card.Img variant="top" src={batmanSignal}  />
                        <Card.Body>
                            <Card.Title>Call Batman</Card.Title>
                            <Card.Text>
                               Press buttton below to send alert to Batman
                            </Card.Text>
                            <Button variant="danger" size="lg" onClick={() => { navigate('/panic') }}>
                                Panic
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: "18rem" }} border="success" >
                        <Card.Img variant="top" src={cancel} style={{height: '24vh'}}/>
                        <Card.Body>
                            <Card.Title>Cancel Call</Card.Title>
                            <Card.Text>
                            Press buttton below to cancel alert to Batman
                            </Card.Text>
                            <Button variant="success" size="lg" onClick={() => {navigate('/panic/history')}}>
                                Cancel
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

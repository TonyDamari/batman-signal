import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config, loginURL } from "../api/api";
import AuthContext from "../utils/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setLoggedIn, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            toast.error("All fields required");
            return;
        }

        try {
            const { data } = await axios.post(
                loginURL,
                { email, password },
                config
            );

            const access_token = `Bearer ${data.data.api_access_token}`

            if (localStorage.getItem("access_token")) {
                setToken()
            }
        

            setToken(access_token);
            localStorage.setItem('access_token', JSON.stringify(access_token))
            setLoggedIn(true);
            toast.success(data.message);

            navigate("/");
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    return (
        <Container className="">
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="dark">
                    Sign In
                </Button>
            </Form>
        </Container>
    );
};

export default Login;

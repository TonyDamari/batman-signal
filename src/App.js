import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./pages/History";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { AuthProvider } from "./utils/auth";
import PrivateRoutes from "./utils/PrivateRoutes";
import Panic from "./pages/Panic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoutes>
                                <Dashboard />
                            </PrivateRoutes>
                        }
                    />
                    <Route
                        path="/panic/history"
                        element={
                            <PrivateRoutes>
                                <History />
                            </PrivateRoutes>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/panic" element={<Panic />} />
                    
                </Routes>
        </Router>
        <ToastContainer/>
        </AuthProvider>
    );
};

export default App;

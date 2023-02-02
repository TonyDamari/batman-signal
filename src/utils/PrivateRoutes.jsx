import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./auth";

const PrivateRoutes = ({ children }) => {
    const { loggedIn } = useContext(AuthContext);
    const location = useLocation();

    if (!loggedIn) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
};

export default PrivateRoutes;

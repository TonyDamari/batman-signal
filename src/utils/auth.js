import { createContext,useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

 
    return (
        <AuthContext.Provider
            value={{ loggedIn, setLoggedIn, token, setToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

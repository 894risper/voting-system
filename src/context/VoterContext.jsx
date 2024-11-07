import React, { useEffect, useState } from "react";

const VoterContext = React.createContext();

const VoterContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    // Load user from localStorage on initial mount
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Error loading user from localStorage:", error);
        }
    }, []);

    // Save user to localStorage whenever user changes
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);

    return (
        <VoterContext.Provider value={{ user, setUser }}>
            {children}
        </VoterContext.Provider>
    );
};

export { VoterContext, VoterContextProvider };

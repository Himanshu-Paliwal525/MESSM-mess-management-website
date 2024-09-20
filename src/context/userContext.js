import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [searchedItems, setSearchedItems] = useState([]);

    return (
        <UserContext.Provider
            value={{ user, setUser, searchedItems, setSearchedItems }}
        >
            {children}
        </UserContext.Provider>
    );
};

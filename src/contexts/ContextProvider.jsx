import { createContext, useState, useContext } from 'react';

const LOCAL_STORAGE_TOKEN_KEY = 'ACCESS_TOKEN';

export const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export function ContextProvider({ children }) {
    const [user, setUser] = useState({
        name: 'Perk',
    });
    const [token, _setToken] = useState(
        // localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
        '123',
    );

    function setToken(token) {
        _setToken(token);
        if (token) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
        } else {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        }
    }

    const values = {
        user,
        token,
        setUser,
        setToken,
    };
    return (
        <StateContext.Provider value={values}>{children}</StateContext.Provider>
    );
}

export const userStateContext = () => useContext(StateContext);

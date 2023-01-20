import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userStateContext } from '../../../contexts/ContextProvider';

function GuestLayout() {
    const { token } = userStateContext();

    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <h2>GuestLayout</h2>
            <Outlet />
        </div>
    );
}

export default GuestLayout;

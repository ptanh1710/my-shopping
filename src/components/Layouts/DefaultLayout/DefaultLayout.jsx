import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import { userStateContext } from '../../../contexts/ContextProvider';
import styles from './DefaultLayout.module.css';

const cx = classNames / bind(styles);

function DefaultLayout() {
    const { token } = userStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={cx('wrapper')}>
            <h2>DefaultLayout</h2>
            <Outlet />
        </div>
    );
}

export default DefaultLayout;

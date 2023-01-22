import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.css';
import { Header } from '../components';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('test')}>DefaultLayout</div>
            <Header />
            <Outlet />
        </div>
    );
}

export default DefaultLayout;

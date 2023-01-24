import React from 'react';
import classNames from 'classnames/bind';
import styles from './Item.module.css';

const cx = classNames.bind(styles);

function Item({ children }) {
    return <div className={cx('item')}>{children}</div>;
}

export default Item;

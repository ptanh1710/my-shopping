import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHeart,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';
import reactLogo from '../../../../assets/react.svg';
import { userStateContext } from '../../../../contexts/ContextProvider';

const cx = classNames.bind(styles);

function Header() {
    const { user, token } = userStateContext();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img
                            className={cx('logoImg')}
                            src={reactLogo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className={cx('searchBox')}>
                    <input
                        type="text"
                        className={cx('searchInput')}
                        spellCheck={false}
                        placeholder="Search..."
                    />
                    <button className={cx('searchBtn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('item')}>
                        <Link to={'/'} className={cx('itemLink')}>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={cx('icon')}
                            />
                        </Link>
                    </div>
                    <div className={cx('item')}>
                        <Link to={'/cart'} className={cx('itemLink')}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={cx('icon')}
                            />
                            <span className={cx('itemCount')}>0</span>
                        </Link>
                    </div>
                    {!token ? (
                        <Link to={'/login'}>Login</Link>
                    ) : (
                        <p>{user.name}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;

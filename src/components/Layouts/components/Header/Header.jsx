import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHeart,
    faCartShopping,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Button as MyButton } from '../../../Button';

import styles from './Header.module.css';
import reactLogo from '../../../../assets/react.svg';
import { userStateContext } from '../../../../contexts/ContextProvider';
import {
    Wrapper as PopperWrapper,
    Item as PopperWrapperItem,
} from '../../../Popper';

const cx = classNames.bind(styles);

function Header() {
    const { user, token } = userStateContext();
    const [searchResult, setSearchResult] = useState([
        {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description:
                'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: "men's clothing",
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
                rate: 3.9,
                count: 120,
            },
        },
        {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description:
                'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: "men's clothing",
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            rating: {
                rate: 4.1,
                count: 259,
            },
        },
    ]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img
                            className={cx('logoImg')}
                            src={reactLogo}
                            alt="Logo"
                        />
                    </Link>
                </div>
                {/* Search box */}
                <Tippy
                    visible={false}
                    interactive
                    render={(arrts) => (
                        <div
                            className={cx('searchResult')}
                            tabIndex="-1"
                            {...arrts}
                        >
                            <PopperWrapper>
                                {searchResult.map((item) => (
                                    <PopperWrapperItem key={item.id}>
                                        <Link to={`/detail/${item.id}`}>
                                            <div className={cx('searchImg')}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className={cx('searchInfo')}>
                                                <p>{item.title}</p>
                                            </div>
                                        </Link>
                                    </PopperWrapperItem>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                {/* Actions */}
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
                        <MyButton to={'/login'}>Login</MyButton>
                    ) : (
                        <Tippy
                            inertia
                            arrow
                            render={(arrts) => (
                                <div
                                    className={cx('userPopper')}
                                    tabIndex="-1"
                                    {...arrts}
                                >
                                    <PopperWrapper>
                                        <PopperWrapperItem>
                                            123
                                        </PopperWrapperItem>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <p className={cx('user')}>
                                <span className={cx('iconUser')}>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className={cx('name')}>{user.name}</span>
                            </p>
                        </Tippy>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
// Text -> only text
// Primary, outLine -> 2 color || color="#ffffff | white"
// rounded button
// Size: default, small, large || size = '20'
// Disabled
function Button({
    to,
    href,
    primary = false,
    error = false,
    success = false,
    warning = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className,
    onClick,
    iconLeft,
    iconRight,
    children,
    ...props
}) {
    let Component = 'button';

    const passProps = {
        onClick,
        ...props,
    };

    // ClassName
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        error,
        success,
        warning,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
    });

    // Check Element: button(default), Link(to) and a(href)
    if (to) {
        Component = Link;
        passProps.to = to;
    } else if (href) {
        Component = 'a';
        passProps.href = href;
    }

    // Check Disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            console.log(props[key]);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Component className={classes} {...passProps}>
            {iconLeft && <span className={cx('iconBtn')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('iconBtn')}>{iconRight}</span>}
        </Component>
    );
}

export default Button;

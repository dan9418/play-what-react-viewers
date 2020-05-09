import React from 'react';
import './ButtonInput.css';

const ButtonInput = props => {
    const { disabled, onClick, children, className } = props;

    const isDisabled = disabled || false;
    const clickHander = onClick || (() => null);

    return (
        <button className={`button-input ${className}`} type='button' disabled={isDisabled} onClick={clickHander} >{children}</button>
    );
}

export default ButtonInput;

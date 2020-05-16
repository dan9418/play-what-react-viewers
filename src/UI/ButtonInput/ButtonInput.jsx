import React from 'react';
import './ButtonInput.css';

const ButtonInput = props => {
    const { disabled, onClick, children, className, highlight } = props;

    const isDisabled = disabled || false;
    const clickHander = onClick || (() => null);

    const cn = `button-input pw-accent ${className ? className : ''} ${highlight ? 'highlight' : ''} ${!isDisabled ? 'link' : ''}`;

    return (
        <button className={cn} type='button' disabled={isDisabled} onClick={clickHander} >{children}</button>
    );
}

export default ButtonInput;

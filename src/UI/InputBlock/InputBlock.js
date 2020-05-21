import React, { useState } from 'react';
import './InputBlock.css';
import PW from 'play-what';

const InputBlock = props => {
    const [open, setOpen] = useState(true);

    return (
        <div className="pw-input-block">
            <div className="title" onClick={() => setOpen(!open)}>
                <label>{props.title}</label>
                <div>{open ? '-' : '+'}</div>
            </div>
            <div className="content">
                {open && props.children}
            </div>
        </div>
    );
}

export default InputBlock;
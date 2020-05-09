import React from 'react';
import './ScalarInput.css';

const ScalarInput = props => {
    const { value, setValue } = props;

    const disabled = typeof value === 'undefined' || typeof value === null;

    return (
        <input className='scalar-input' type='number' disabled={disabled} value={value} onChange={e => setValue(e.target.value)} />
    );
}

export default ScalarInput;

import React from 'react';
import './VectorInput.css';
import ScalarInput from '../ScalarInput/ScalerInput';

export const VectorInput = ({ value, setValue }) => {
    const { p, d } = value;
    const setP = e => setValue({ d: d, p: parseInt(e.target.value) });
    const setD = e => setValue({ d: parseInt(e.target.value), p: p });
    return (
        <div className='vector-input'>
            <ScalarInput value={d} setValue={setD} />
            <ScalarInput value={p} setValue={setP} />
        </div>
    );
};
export default VectorInput;

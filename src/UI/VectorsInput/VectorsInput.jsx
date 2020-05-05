import React from 'react';
import './VectorsInput.css';

import PW from 'play-what';

const VectorInput = ({ value, setValue }) => {
    const { p, d } = value;
    return (
        <div className='vector-input'>
            <input type='number' disabled={!setValue} value={d} onChange={e => setValue({ d: parseInt(e.target.value), p: p })} />
            <input type='number' disabled={!setValue} value={p} onChange={e => setValue({ d: d, p: parseInt(e.target.value) })} />
        </div>
    );
};

const VectorRow = ({ vector, origin, max, setValue }) => {
    const resultant = PW.Theory.addVectors(origin, vector, max);
    return (
        <div className='vector-row'>
            <VectorInput value={vector} setValue={setValue} />
            <span>→</span>
            <VectorInput value={resultant} />
        </div>
    );
};

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals, max } = props;

    const rows = intervals.map((v, i) => {
        const updateInterval = newInterval => setIntervals([...intervals.slice(0, i), newInterval, ...(intervals.slice(i + 1))]);
        return <VectorRow key={i} vector={v} origin={keyCenter} max={max} setValue={updateInterval} />;
    });

    return (
        <div className="vectors-input">
            <div className='origin-input'>
                <label>a</label>
                <VectorInput value={keyCenter} setValue={setKeyCenter} point />
            </div>
            <div className='vector-rows'>
                <label>B</label>
                {rows}
            </div>
        </div>
    );
}

export default ConceptInput;
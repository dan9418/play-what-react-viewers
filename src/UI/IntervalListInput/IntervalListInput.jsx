import React from 'react';
import './IntervalListInput.css';
import IntervalInput from '../IntervalInput/IntervalInput';

const IntervalListInput = props => {
    const { intervals, setIntervals } = props;

    const intervalInputs = intervals.map((v, i) => {
        const setIntervalValue = ivl => setIntervals([...intervals.slice(0, i), ivl, ...(intervals.slice(i + 1))]);
        return <div key={i}><IntervalInput interval={v} setInterval={setIntervalValue} /></div>;
    });

    return (
        <div className="interval-list-input">
            {intervalInputs}
        </div>
    );
}

export default IntervalListInput;
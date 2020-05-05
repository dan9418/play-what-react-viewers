import React from 'react';
import './ConceptInput.css';

import PresetInput from './PresetInput'

import PW from 'play-what';

const IntervalLabel = ({ value, max }) => {
    return (
        <div className='interval-label'>
            {PW.Theory.getIntervalName(value, max)}
        </div>
    );
};

const NoteLabel = ({ value, max }) => {
    return (
        <div className='note-label'>
            {PW.Theory.getNoteName(value, max)}
        </div>
    );
};

const VectorRow = ({ vector, origin, max, setValue }) => {
    const resultant = PW.Theory.addVectors(origin, vector, max);
    return (
        <div className='vector-row'>
            <IntervalLabel value={vector} max={max} />
            <NoteLabel value={resultant} max={max} />
        </div>
    );
};

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals, max } = props;

    const rows = intervals.map((v, i) => (
        <VectorRow key={i} vector={v} origin={keyCenter} max={max} setValue={x => setIntervals([...intervals.slice(0, i), x, ...(intervals.slice(i + 1))])} />
    ));

    return (
        <div className="concept-input">
            <div className='origin-input'>
                <label>Key Center</label>
                <NoteLabel value={keyCenter} max={max} />
            </div>
            <div className='vector-rows'>
                <label>Intervals</label>
                <PresetInput value={intervals} setValue={setIntervals} />
                {rows}
            </div>
        </div>
    );
}

export default ConceptInput;
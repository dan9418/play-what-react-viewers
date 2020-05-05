import React from 'react';
import './ConceptInput.css';

import PresetInput from './PresetInput'

import PW from 'play-what';

const DegreeInput = ({ value, setValue }) => {
    const allDegrees = PW.Theory.getAllDegrees();
    return (
        <div className="degree-input">
            {allDegrees.map((d, i) => {
                const isActive = value.d === i && value.p === d.p
                return (
                    <div
                        key={i}
                        className={`degree-button ${isActive ? 'active' : ''}`}
                        onClick={() => setValue(d)}
                    >{PW.Theory.getDegreeMapping(d.d).name}</div>
                );
            })}
        </div>
    );
};

const AccidentalInput = () => {
    return (
        <div className="accidental-input">

        </div>
    );
};

const KeyCenterInput = ({ value, setValue }) => {
    const setDegree = d => setValue({ d: d.d, p: d.p });
    return (
        <div className="key-center-input">
            <DegreeInput value={value} setValue={setDegree} />
            <AccidentalInput />
            <input type="number" />
        </div>
    );
};

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

const IntervalRow = ({ vector, origin, max, setValue }) => {
    const resultant = PW.Theory.addVectors(origin, vector, max);
    return (
        <div className='interval-row'>
            <IntervalLabel value={vector} max={max} />
            <NoteLabel value={resultant} max={max} />
        </div>
    );
};

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals, max } = props;

    const rows = intervals.map((v, i) => (
        <IntervalRow key={i} vector={v} origin={keyCenter} max={max} setValue={x => setIntervals([...intervals.slice(0, i), x, ...(intervals.slice(i + 1))])} />
    ));

    return (
        <div className="concept-input">
            <label>Key Center:</label>
            <KeyCenterInput value={keyCenter} setValue={setKeyCenter} />
            <NoteLabel value={keyCenter} max={max} />

            <label>Intervals:</label>
            {rows}
            <PresetInput value={intervals} setValue={setIntervals} />

        </div>
    );
}

export default ConceptInput;
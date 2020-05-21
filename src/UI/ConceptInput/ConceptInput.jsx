import React, { useState } from 'react';
import './ConceptInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';
import ConceptIntervalsInput from '../ConceptIntervalsInput/ConceptIntervalsInput';
import ConceptMathInput from '../ConceptMathInput/ConceptMathInput';
import Dropdown from '../Dropdown/Dropdown';

const CONCEPT_INPUT_MODES = {
    preset: {
        id: 'preset',
        name: 'Preset'
    },
    intervals: {
        id: 'intervals',
        name: 'Intervals'
    },
    math: {
        id: 'math',
        name: 'Math'
    }
}
const CONCEPT_INPUT_MODES_VALUES = Object.values(CONCEPT_INPUT_MODES);

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    const [inputMode, setInputMode] = useState(CONCEPT_INPUT_MODES.math);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals);
    const noteNames = notes.map((n, i) => <div key={i} className="note-name">{PW.Theory.getNoteName(n)}</div>);

    return (
        <div className="concept-input">
            <div className='input-mode-box'>
                <label>Input Mode: </label>
                <Dropdown value={inputMode} setValue={setInputMode} options={CONCEPT_INPUT_MODES_VALUES} />
            </div>
            {inputMode.id === CONCEPT_INPUT_MODES.preset.id && <ConceptPresetInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />}
            {inputMode.id === CONCEPT_INPUT_MODES.intervals.id && <ConceptIntervalsInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />}
            {inputMode.id === CONCEPT_INPUT_MODES.math.id && <ConceptMathInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />}
            <div className="pw-input-block-x">{noteNames}</div>
        </div>
    );
}

export default ConceptInput;
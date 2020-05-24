import React, { useState } from 'react';
import './ConceptInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';
import ConceptIntervalsInput from '../ConceptIntervalsInput/ConceptIntervalsInput';
import ConceptMathInput from '../ConceptMathInput/ConceptMathInput';
import Dropdown from '../Dropdown/Dropdown';
import ConceptChartInput from '../ConceptChartInput/ConceptChartInput';
import useNoteContext, { NoteContextProvider } from '../../Utils/NoteContext';
import AUTUMN_LEAVES from '../../Utils/AutumnLeaves';
import ButtonInput from '../ButtonInput/ButtonInput';

const CONCEPT_INPUT_MODES = {
    preset: {
        id: 'preset',
        name: 'Preset',
        component: ConceptPresetInput
    },
    intervals: {
        id: 'intervals',
        name: 'Intervals',
        component: ConceptIntervalsInput
    },
    math: {
        id: 'math',
        name: 'Math',
        component: ConceptMathInput
    },
    chart: {
        id: 'chart',
        name: 'Chart',
        component: ConceptChartInput
    }
}
const CONCEPT_INPUT_MODES_VALUES = Object.values(CONCEPT_INPUT_MODES);

const Controls = ({ children }) => {
    const noteContext = useNoteContext();
    return (
        <>
            <ButtonInput onClick={noteContext.play}>Play</ButtonInput>
            <ButtonInput onClick={noteContext.pause}>Pause</ButtonInput>
            {children}
        </>
    );
}

const ConceptInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    const [inputMode, setInputMode] = useState(CONCEPT_INPUT_MODES.chart);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals);
    const noteNames = notes.map((n, i) => <div key={i} className="note-name">{PW.Theory.getNoteName(n)}</div>);

    const Component = inputMode.component;

    return (
        <div className="concept-input">
            <div className='input-mode-box'>
                <label>Input Mode: </label>
                <Dropdown value={inputMode} setValue={setInputMode} options={CONCEPT_INPUT_MODES_VALUES} />
            </div>
            <div className="note-names pw-lighter">{noteNames}</div>
            <NoteContextProvider initPulses={AUTUMN_LEAVES}>
                <Controls>
                    <Component keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />

                </Controls>
            </NoteContextProvider>
        </div>
    );
}

export default ConceptInput;
import React, { useState } from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';
import useNoteContext from '../../Utils/NoteContext';
import InputBlock from '../InputBlock/InputBlock';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.intervals };
const DEFAULT_ROW = [DEFAULT_COL];


const ConceptBlock = props => {
    const [editing, setEditing] = useState(false);

    const { pulse, blockIndex } = props;

    const noteContext = useNoteContext();
    const { concept, setConcept } = noteContext;
    const setKeyCenter = k => setConcept({ a: k, B: pulse.B });
    const setIntervals = i => setConcept({ a: pulse.a, B: i });

    const keyName = PW.Theory.getNoteName(pulse.a);
    const id = PW.Theory.findPreset(pulse.B).id;
    const name = `${keyName} ${id}`;

    const isActive = noteContext.pulseIndex === blockIndex; //PW.Theory.areIntervalEqual(keyCenter, a) && PW.Theory.areIntervalsEqual(intervals, B);

    const setThisAsCurrent = () => {
        noteContext.setPulseIndex(blockIndex);
    };

    return (
        <div className="concept-chart-block">
            <div className={`name pw-hov ${isActive ? 'pw-accent' : 'pw-light'}`} onClick={setThisAsCurrent}>
                {name}
            </div>
            <div>
                <div className="edit pw-hov" onClick={() => setEditing(!editing)}>
                    Edit
                </div>
            </div>
            {
                editing &&
                <div className="edit-panel pw-secondary">
                    <ConceptPresetInput
                        keyCenter={pulse.a}
                        setKeyCenter={setKeyCenter}
                        intervals={pulse.b}
                        setIntervals={setIntervals}
                    />
                </div>
            }
        </div >
    );
}

const ConceptChartSection = props => {
    return (
        <InputBlock title={props.name} x>
            {props.children}
        </InputBlock>
    );
}

const ConceptChartInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    const noteContext = useNoteContext();
    const pulses = noteContext.pulses;

    return (
        <div className="concept-chart-input pw-medium">

        </div>
    );
}

export default ConceptChartInput;
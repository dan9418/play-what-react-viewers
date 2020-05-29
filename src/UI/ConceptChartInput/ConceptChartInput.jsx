import React, { useState } from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';
import useNoteContext from '../../Utils/NoteContext';
import InputBlock from '../InputBlock/InputBlock';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.intervals };
const DEFAULT_ROW = [DEFAULT_COL];


const ConceptChartPulse = props => {
    const [editing, setEditing] = useState(false);
    const noteContext = useNoteContext();
    const { sectionIndex, pulseIndex, pulse } = noteContext;
    const thisPulse = props.pulse;
    const currentPulse = pulse;
    //const setKeyCenter = k => setConcept({ a: k, B: pulse.B });
    //const setIntervals = i => setConcept({ a: pulse.a, B: i });

    const keyName = PW.Theory.getNoteName(thisPulse.a);
    const id = PW.Theory.findPreset(thisPulse.B).id;
    const name = `${keyName} ${id}`;

    const isActive = props.pulseIndex === pulseIndex && props.sectionIndex === sectionIndex; //PW.Theory.areIntervalEqual(keyCenter, a) && PW.Theory.areIntervalsEqual(intervals, B);

    const setThisAsCurrent = () => {
        noteContext.setSectionIndex(props.sectionIndex);
        noteContext.setPulseIndex(props.pulseIndex);
    };

    return (
        <div className="concept-chart-block" style={{ flexGrow: thisPulse.beats }}>
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
                        keyCenter={thisPulse.a}
                        setKeyCenter={setKeyCenter}
                        intervals={thisPulse.b}
                        setIntervals={setIntervals}
                    />
                </div>
            }
        </div >
    );
}

const ConceptChartSection = ({ section, sectionIndex }) => {
    return (
        <InputBlock title={section.name} x>
            {section.pulses.map((p, i) => (
                <ConceptChartPulse key={i} sectionIndex={sectionIndex} pulse={p} pulseIndex={i} />
            ))}
        </InputBlock>
    );
};

const ConceptChartInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    const noteContext = useNoteContext();
    const { sections } = noteContext;

    return (
        <div className="concept-chart-input pw-lighter">
            {sections.map((s, i) => (
                <ConceptChartSection key={i} section={s} sectionIndex={i} />
            ))}
        </div>
    );
}

export default ConceptChartInput;
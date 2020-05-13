import React from 'react';
import './KeyCenterInput.css';

import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ScalarInput from '../ScalarInput/ScalerInput';

const DegreeInput = ({ value, setValue }) => {
    const allDegrees = PW.Theory.getAllDegrees();
    return (
        <div className="degree-input">
            {allDegrees.map((d, i) => {
                const isActive = value.d === i && value.p === d.p
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setValue(d)}
                    >
                        {PW.Theory.getDegreeMapping(d.d).name}
                    </ButtonInput>
                );
            })}
        </div>
    );
};

const AccidentalInput = () => {
    const allAccidentals = Object.values(PW.Constants.ACCIDENTAL);
    return (
        <div className="accidental-input">
            {allAccidentals.map((a, i) => {
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setValue(a)}
                    >
                        {a.name}
                    </ButtonInput>
                );
            })}
        </div>
    );
};

const OctaveInput = ({ octave, setOctave }) => <ScalarInput value={octave} setValue={setOctave} />;

const KeyCenterInput = ({ keyCenter, setKeyCenter }) => {
    const setValue = d => setKeyCenter({ d: d.d, p: d.p });
    return (
        <div className="key-center-input">
            <label>Degree:</label>
            <DegreeInput value={keyCenter} setValue={setValue} />
            <label>Accidental:</label>
            <AccidentalInput />
            <label>Octave:</label>
            <OctaveInput />
        </div>
    );
};

export default KeyCenterInput;
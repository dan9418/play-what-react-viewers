import React from 'react';
import './KeyCenterInput.css';

import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ScalarInput from '../ScalarInput/ScalerInput';

const DegreeInput = ({ degree, setDegree }) => {
    const allDegrees = PW.Theory.getAllDegrees();
    return (
        <div className="degree-input">
            {allDegrees.map((d, i) => {
                const isActive = degree && degree.d === i && degree.p === d.pitch
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setDegree(d, i)}
                        highlight={isActive}
                    >
                        {PW.Theory.getDegreeMapping(d.d).name}
                    </ButtonInput>
                );
            })}
        </div>
    );
};

const AccidentalInput = ({ accidental, setAccidental }) => {
    const allAccidentals = Object.values(PW.Constants.ACCIDENTAL);
    return (
        <div className="accidental-input">
            {allAccidentals.map((a, i) => {
                const isActive = accidental && accidental.offset === a.offset;
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setAccidental(a)}
                        highlight={isActive}
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
    const setDegree = (d, i) => {
        const newKeyCenter = { ...keyCenter };
        newKeyCenter.d = i; // TODO
        setKeyCenter(newKeyCenter);
    };
    const setAccidental = a => {
        const newKeyCenter = { ...keyCenter };
        newKeyCenter.p = newKeyCenter.p + a.offset;
        setKeyCenter(newKeyCenter);
    };
    const setOctave = o => {
        const newKeyCenter = { ...keyCenter };
        newKeyCenter.p = newKeyCenter.p + o * 12; // TODO
        setKeyCenter(newKeyCenter);
    };

    // TODO
    const degreeIndex = PW.Utils.modulo(keyCenter.d, 12);
    const degreeTemp = PW.Constants.DEGREE_MAPPING[degreeIndex] || null;
    const degree = {
        p: degreeTemp.pitch,
        d: degreeIndex
    }

    const offset = keyCenter.p - degree.p;
    const accidental = PW.Constants.ACCIDENTAL_VALUES.find(a => a.offset === offset) || null;
    const octave = Math.floor(keyCenter.p / 12);

    return (
        <div className="key-center-input">
            <label>Degree:</label>
            <DegreeInput degree={keyCenter} setDegree={setDegree} />
            <label>Accidental:</label>
            <AccidentalInput accidental={accidental} setAccidental={setAccidental} />
            <label>Octave:</label>
            <OctaveInput octave={octave} setOctave={setOctave} />
        </div>
    );
};

export default KeyCenterInput;
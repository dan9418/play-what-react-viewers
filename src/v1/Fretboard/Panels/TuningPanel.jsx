import React, { useState } from "react";
import "./TuningPanel.css";
import Inputs from '../../Inputs/_module';
import PlayWhat from 'play-what';

// const removeString = (config, setStrings, stringIndex) => {
//     const newConfig = config.filter((s, i) => i !== stringIndex);
//     setStrings(newConfig);
// };

// const addString = (config, setStrings, stringIndex) => {
//     const newConfig = [...config];
//     newConfig.splice(stringIndex, 0, { tuning: 0 })
//     setStrings(newConfig);
// };

// const setStringNumber = (config, setStrings, number) => {
//     const newConfig = [...config];
//     const getEmptyStrings = n => {
//         const s = [];
//         for (let i = 0; i < n; i++) {
//             s.push({ tuning: 0 })
//         }
//         return s;
//     }
//     if (number < config.length) {
//         setStrings(newConfig.slice(0, number));
//     }
//     else if (number > config.length) {
//         setStrings([...newConfig, ...getEmptyStrings(number - config.length)]);
//     }
// };

const tuneString = (config, setStrings, stringIndex, tuning) => {
    const newConfig = [...config];
    newConfig[stringIndex] = { tuning: tuning };
    setStrings(newConfig);
};

const getStringInputs = (stringConfig, setStrings) => {
    return [
        ...stringConfig.map((c, i) => (
            <div key={i + '+'} className='tune' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning + 1)} >+</div>
        )).reverse(),
        ...stringConfig.map((c, i) => (
            <div key={i + '*'} className='tuning'>
                {PlayWhat.Constants.PITCH_CLASS_NAMES[PlayWhat.Common.modulo(c.tuning, 12)]}
                <sub className="tuning-octave">{Math.floor(c.tuning / 12)}</sub>
            </div>
        )).reverse(),
        ...stringConfig.map((c, i) => (
            <div key={i + '-'} className='tune' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning - 1)} >-</div>
        )).reverse()
    ];
}

const TuningPanel = props => (
    <div className='tuning-panel' style={{ gridTemplateColumns: `repeat(${props.strings.length}, 1fr)` }} >
        {getStringInputs(props.strings, props.setStrings)}
    </div>
);

export default TuningPanel;
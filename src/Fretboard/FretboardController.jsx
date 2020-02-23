import React, { useState } from "react";
import "./Fretboard.css";
import Fretboard from './Fretboard';
import DEFAULT_PROPS from "./Fretboard.defaults";
import PlayWhat from 'play-what';
import Inputs from '../Inputs/_module';

const tuneString = (config, setStrings, stringIndex, tuning) => {
    const newConfig = [...config];
    newConfig[stringIndex] = { tuning: tuning };
    setStrings(newConfig);
};

const removeString = (config, setStrings, stringIndex) => {
    const newConfig = config.filter((s, i) => i !== stringIndex);
    setStrings(newConfig);
};

const addString = (config, setStrings, stringIndex) => {
    const newConfig = [...config];
    newConfig.splice(stringIndex, 0, { tuning: 0 })
    setStrings(newConfig);
};

const getStringInputs = (stringConfig, setStrings) => {
    const inputs = stringConfig.map((c, i) => (
        <>
            <div key={i + 'x'} className='string-remove' onClick={() => removeString(stringConfig, setStrings, i)} >x</div>
            <div key={i + '-'} className='string-tuner down' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning - 1)} >-</div>
            <div key={i + '*'} className='string-tuning'>{PlayWhat.Constants.PITCH_CLASS_NAMES[PlayWhat.Common.modulo(c.tuning, 12)]}</div>
            <div key={i + '+'} className='string-tuner up' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning + 1)} >+</div>
        </>
    ));
    return inputs;
}

export default function FretboardController(props) {

    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(DEFAULT_PROPS.strings);

    // Label
    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState(PlayWhat.Presets.MODE.Ionian);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelUtils.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.pitchClass);

    return (
        <div className='fretboard-controller no-select'>

            <div className='controller-title'>Fretboard</div>


            <div className='fretboard-input-container'>
                <div className='string-input-grid' style={{ gridTemplateRows: `20px repeat(${strings.length}, auto) 20px` }} >
                    <div /> <div /> <div onClick={() => addString(strings, setStrings, 0)} className='string-add'>+</div> <div />
                    {getStringInputs(strings, setStrings)}
                    <div /><div /><div onClick={() => addString(strings, setStrings, strings.length)} className='string-add'>+</div><div />
                </div>
                <Fretboard
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
                    strings={strings}

                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
                />

                <div className='card'>
                    <div className='label-input-container'>
                        <div className='title'>Labels</div>

                        <Inputs.SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                        <div className='label-label'>Numbers</div>

                        <Inputs.SwitchInput value={false} setValue={() => { }} />
                        <div className='label-label'>Tuning</div>

                        <Inputs.SwitchInput value={showDots} setValue={setShowDots} />
                        <div className='label-label'>Dots</div>
                    </div>
                </div>
            </div>


            <div className='input-group'>
                <div className='toggle'>*</div>
                <div className='input-label'>Range</div>

                <div className='input-container'>
                    <div className='input-label'>Low Fret</div>
                    <Inputs.NumericInput value={fretLow} setValue={setFretLow} />
                </div>

                <div className='input-container'>
                    <div className='input-label'>High Fret</div>
                    <Inputs.NumericInput value={fretHigh} setValue={setFretHigh} />
                </div>
            </div>
        </div >
    );
}
import React, { useState } from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
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

const getStringInputs = (stringConfig, setStrings) => {
    const inputs = stringConfig.map((c, i) => (
        <div key={i} className='string-input'>
            <div onClick={() => removeString(stringConfig, setStrings, i)} className='string-remove'>X</div>
            <div onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning - 1)} className='string-tuner'>-</div>
            <div key={i} className='string-tuning'>{c.tuning}</div>
            <div onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning + 1)} className='string-tuner'>+</div>
        </div>
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

            <div className='fretboard-input-container'>
                <div className='string-input-container'>
                    {getStringInputs(strings, setStrings)}
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
            </div>

            <div className='input-group'>
                <div className='input-label'>Labels</div>

                <div className='input-container'>
                    <div className='input-label'>Show Dots</div>
                    <Inputs.SwitchInput value={showDots} setValue={setShowDots} />
                </div>

                <div className='input-container'>
                    <div className='input-label'>Show Fret Numbers</div>
                    <Inputs.SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                </div>
            </div>

            <div className='input-group'>
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
        </div>
    );
}
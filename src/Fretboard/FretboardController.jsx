import React, { useState } from "react";
import "./Fretboard.css";
import Fretboard from './Fretboard';
import DEFAULT_PROPS from "./Fretboard.defaults";
import PlayWhat from 'play-what';
import Inputs from '../Inputs/_module';
import RangeInput from "../Inputs/RangeInput/RangeInput";

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

const setStringNumber = (config, setStrings, number) => {
    const newConfig = [...config];
    const getEmptyStrings = n => {
        const s = [];
        for (let i = 0; i < n; i++) {
            s.push({ tuning: 0 })
        }
        return s;
    }
    if (number < config.length) {
        setStrings(newConfig.slice(0, number));
    }
    else if (number > config.length) {
        setStrings([...newConfig, ...getEmptyStrings(number - config.length)]);
    }
};

const getStringInputs = (stringConfig, setStrings) => {
    const inputs = stringConfig.map((c, i) => (
        <React.Fragment key={i}>
            <div key={i + '-'} className='string-tuner down' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning - 1)} >-</div>
            <div key={i + '*'} className='string-tuning'>{PlayWhat.Constants.PITCH_CLASS_NAMES[PlayWhat.Common.modulo(c.tuning, 12)]}</div>
            <div key={i + '+'} className='string-tuner up' onClick={() => tuneString(stringConfig, setStrings, i, stringConfig[i].tuning + 1)} >+</div>
        </React.Fragment>
    ));
    return inputs;
}

const RangePanel = props => (
    <div className='range-input-container'>
        <div className='title'>Range</div>

        <div className='range-input-label'>Frets</div>
        <RangeInput min={0} max={24} low={props.fretLow} high={props.fretHigh} setLowValue={props.setFretLow} setHighValue={props.setFretHigh} />

        <div className='range-input-label'>Strings</div>
        <RangeInput min={1} max={12} low={1} high={props.strings.length} setHighValue={v => props.setStringNumber(strings, setStrings, v)} fixed={true} />
    </div>
);

const StringPanel = props => (
    <div className='string-input-grid' style={{ gridTemplateRows: `repeat(${props.strings.length}, auto)` }} >
        <div className='title'>Tuning</div>
        {getStringInputs(props.strings, props.setStrings)}
    </div>
);

const LabelPanel = props => (
    <div className='label-input-container'>
        <div className='title'>Labels</div>

        <Inputs.SwitchInput value={props.showFretNumbers} setValue={props.setShowFretNumbers} />
        <div className='label-label'>Numbers</div>

        <Inputs.SwitchInput value={false} setValue={() => { }} />
        <div className='label-label'>Tuning</div>

        <Inputs.SwitchInput value={props.showDots} setValue={props.setShowDots} />
        <div className='label-label'>Dots</div>
    </div>
);

const PANELS = [
    {
        id: 'range',
        name: 'Range',
        component: RangePanel
    },
    {
        id: 'string',
        name: 'Strings',
        component: StringPanel
    },
    {
        id: 'label',
        name: 'Labels',
        component: LabelPanel
    }
];

const FretboardController = () => {

    const [configOpen, setConfigOpen] = useState(false);
    const [activePanel, setActivePanel] = useState(PANELS[2]);

    // Fretboard
    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(DEFAULT_PROPS.strings);

    // Theory
    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState(PlayWhat.Presets.MODE.Ionian);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelUtils.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.pitchClass);

    const ActivePanel = activePanel.component;
    const state = {
        fretLow, setFretLow,
        fretHigh, setFretHigh,
        showDots, setShowDots,
        showFretNumbers, setShowFretNumbers,
        strings, setStrings
    };

    return (
        <div className='fretboard-controller no-select'>

            <div className='controller-title'>Fretboard</div>

            <div className='fretboard-container'>
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

            <div className='input-container'>

                <div className='card preview' onClick={() => setConfigOpen(!configOpen)}>
                    edit
                </div>


                {configOpen &&
                    <div className='input-box'>
                        <div className='panel-name-container'>
                            {PANELS.map(panel => (
                                <div className="panel-name">
                                    {panel.name}
                                </div>
                            ))}
                        </div>
                        {
                        <ActivePanel {...state}/>
}
                    </div>
                }


            </div>
        </div >
    );
}

export default FretboardController;
import PW from 'play-what';
import React, { useState } from "react";
import "./Explorer.css";
import Concept from '../Concept/Concept';
import List from '../List/List';
import APIBrowser from './APIBrowser';

const DEFAULT_PROPS = {
    colorFn: PW.api.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Out = ({ keyCenter, intervals, name, colorFn, viewer }) => {
    if (!keyCenter || !intervals) return 'N/A';

    const notes = PW.api.Vector.addMatrix({ a: keyCenter, B: intervals });
    const modes = PW.api.Matrix.Scale.getAllModes({ keyCenter, scale: notes });
    const numerals = PW.api.Matrix.Scale.getAllNumerals({ keyCenter, scale: notes });

    return (
        <div className='out'>
            <Concept name={name} keyCenter={keyCenter} intervals={intervals} notes={notes} colorFn={colorFn}/>
            <List name={`Modes`} viewer={viewer} list={modes} colorFn={colorFn} />
            <List name={`Roman Numerals`} viewer={viewer} list={numerals} colorFn={colorFn} />
        </div>
    );
}

const Explorer = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const [keyCenter, setKeyCenter] = useState(props.keyCenter);
    const [intervals, setIntervals] = useState(props.intervals);

    return (
        <div className='explorer'>
            {false && <APIBrowser/>}
            <h2>Concept</h2>
            <Out {...props} keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />
        </div>
    );
}

export default Explorer;
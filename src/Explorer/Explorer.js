import PW from 'play-what';
import React from "react";
import "./Explorer.css";
import Concept from '../Concept/Concept';
import List from '../List/List';

const DEFAULT_PROPS = {
    colorFn: PW.api.PW.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Explorer = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };
    const { keyCenter, intervals, name, colorFn, viewer } = props;

    const notes = PW.api.PW.Vector.addMatrix({ a: keyCenter, B: intervals });

    const modes = PW.api.PW.Matrix.Scale.getAllModes({ keyCenter, scale: notes });

    const numerals = PW.api.PW.Matrix.Scale.getAllNumerals({ keyCenter, scale: notes });

    const explorerContext = {
        keyCenter,
        intervals,
        notes
    };

    return (
        <div className='explorer'>
            <Concept name={`Concept: ${name}`} keyCenter={keyCenter} intervals={intervals} notes={notes} colorFn={colorFn} />
            <List name={`Modes`} viewer={viewer} list={modes} colorFn={colorFn} />
            <List name={`Roman Numerals`} viewer={viewer} list={numerals} colorFn={colorFn} />
        </div>
    );
}

export default Explorer;
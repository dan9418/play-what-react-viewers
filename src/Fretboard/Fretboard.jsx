import * as React from "react";
import Label from '../Label/Label';
import { getDotsForFret } from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_PROPS from "./Fretboard.defaults";

const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export const Fret = ({ context, mapFn }) => {
    const { fretIndex, stringIndex } = context;

    const labelProps = mapFn(context);

    let classes = ['fret'];
    /*if (props.fretNumber === 0)
        classes.push('open');*/

    return (
        <div className={classes.join(' ')}>
            {false && <div className='fret-number'>{fretIndex + 1}</div>}
            <div className='fret-string' />
            <Label {...labelProps} />
            {false && <div className='fret-dots'>{getDotsForFret(fretIndex + 1)}</div>}
        </div>
    );
}

const getFrets = (props) => {
    const { numFrets, numStrings, mapFn } = props;
    //let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
    //let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

    const allFrets = [];

    for (let s = 0; s < numStrings; s++) {
        for (let f = 0; f < numFrets; f++) {
            const ctx = {
                stringIndex: s,
                fretIndex: f
            };

            allFrets.push(
                <Fret
                    key={`s${s}-f${f}`}
                    context={ctx}
                    mapFn={mapFn}
                />
            );
        }
    }
    return allFrets;
}

const getFretRatios = (numFrets) => {
    let ratios = [];
    for (let i = 1; i <= numFrets; i++) {
        ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
    }
    return ratios;
}

const Fretboard = ({ style, ...userProps }) => {
    const props = Object.assign({}, DEFAULT_PROPS, userProps);
    // Calculate fretboard dimensions

    const gridTemplateColumns = getFretRatios(props.numFrets).map(n => n + 'fr').join(' ');
    const gridTemplateRows = `repeat(${props.numStrings}, 1fr)`;
    const fretboardStyles = {
        gridTemplateColumns,
        gridTemplateRows,
        ...style
    };

    return (
        <div className='fretboard' style={fretboardStyles}>
            {getFrets(props)}
        </div>
    );
}

export default Fretboard;
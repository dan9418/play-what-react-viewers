import * as React from "react";
import "./Fretboard.css";
import FretLabel from './FretLabel';

const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

const getDotsForFret = (fretNumber) => {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}

export const Fret = (props) => {
    let classes = ['fret'];
    if (props.fretNumber === 0)
        classes.push('open');

    return (
        <div className={classes.join(' ')}>
            {props.showFretNumber && <div className='fret-number'>{props.fretNumber}</div>}
            <div className='fret-string'/>
            <FretLabel noteIndex={props.noteIndex} fretMapping={props.fretMapping} />
            {props.showFretDots && <div className='fret-dots'>{getDotsForFret(props.fretNumber)}</div>}
        </div>
    );
}
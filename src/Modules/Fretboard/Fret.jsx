import * as React from "react";
import "./Fretboard.css";
import FretLabel from './FretLabel';
import { getDotsForFret } from './Fretboard.api';

export const Fret = (props) => {
    let classes = ['fret'];
    if (props.fretNumber === 0)
        classes.push('open');

    return (
        <div className={classes.join(' ')}>
            {props.showFretNumber && <div className='fret-number'>{props.fretNumber}</div>}
            <div className='fret-string' />
            <FretLabel noteIndex={props.noteIndex} minIndex={props.minIndex} maxIndex={props.maxIndex} notes={props.notes} />
            {props.showFretDots && <div className='fret-dots'>{getDotsForFret(props.fretNumber)}</div>}
        </div>
    );
}
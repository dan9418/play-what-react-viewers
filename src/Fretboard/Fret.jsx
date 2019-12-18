import * as React from "react";
import "./Fretboard.css";

const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export function Fret(props) {
    let classes = ['fret'];
    if (props.fretNumber === 0)
        classes.push('open');

    return (
        <div className={classes.join(' ')} onClick={props.action}>
            {props.showFretNumber && <div className='fret-number'>{props.fretNumber}</div>}
            <div className='fret-string'></div>
            <div className='fret-label' style={props.styles}>{props.label}</div>
            {props.showFretDots && <div className='fret-dots'>{getDotsForFret(props.fretNumber)}</div>}
        </div>
    );
}

function getDotsForFret(fretNumber) {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}
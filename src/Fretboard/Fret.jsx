import * as React from "react";
import "./Fretboard.css";

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

    let LabelComponent = props.labelComponent;

    return (
        <div className={classes.join(' ')}>
            {props.showFretNumber && <div className='fret-number'>{props.fretNumber}</div>}
            <div className='fret-string'/>
            <LabelComponent {...props} {...props.labelProps} />
            {props.showFretDots && <div className='fret-dots'>{getDotsForFret(props.fretNumber)}</div>}
        </div>
    );
}
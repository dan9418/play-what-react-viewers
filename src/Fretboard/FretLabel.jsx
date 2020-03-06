import * as React from "react";
import "./Fretboard.css";
import DEFAULT_PROPS from "./FretLabel.defaults";
import PlayWhat from 'play-what';

// Temp
function callConfigFunction(configFunction, ...args) {
    return ((typeof configFunction).toLowerCase() === 'function') ? configFunction.apply(null, args) : configFunction.fx.apply(null, args);
}

export default function FretLabel(props) {
    let config = { ...DEFAULT_PROPS, ...props };

    let note = callConfigFunction(config.mapStrategy, config.noteIndex, config.keyCenter, config.concept);
    note = note ? note : new Theory.NonfunctionalNote(config.noteIndex);

    let styles = callConfigFunction(config.colorStrategy, note);
    let label = callConfigFunction(config.labelStrategy, note);
    let action = callConfigFunction(config.actionStrategy, note);

    let scaleTone = callConfigFunction(config.mapStrategy, config.noteIndex, new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.G, PlayWhat.Constants.ACCIDENTAL.Natural, 4), PlayWhat.Presets.SCALE.Major);

    console.log(scaleTone);

    styles = {
        color: 'white',
        backgroundColor: getBG(note.interval && note.interval.degree, scaleTone.interval)
    };

    return (
        <div className='fret-label' style={styles} onClick={action}>
            {label}
        </div>
    );
}

var getBG = (degree, scaleTone) => {
    const def = '#999';
    switch (degree) {
        case 1:
            return 'red';
        case 2:
            return def;
        case 3:
            return 'green';
        case 4:
            return def;
        case 5:
            return def;
        case 6:
            return def;
        case 7:
            return 'blue';
        default:
            return scaleTone ? '#DDD' : '';
    }
}
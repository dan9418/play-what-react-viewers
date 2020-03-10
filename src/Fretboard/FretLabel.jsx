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
        backgroundColor: getBG(note.interval && note.interval.degree, scaleTone.interval, isInVoicing(note.interval, props.stringNum, props.rootString))
    };

    return (
        <div className='fret-label' style={styles} onClick={action}>
            {label}
        </div>
    );
}

var isInVoicing = (interval, stringNum, rootString = 6) => {
    return interval && interval.degree === 1 && rootString - stringNum === 0 ||
        interval && interval.degree === 7 && rootString - stringNum === 2 ||
        interval && interval.degree === 3 && rootString - stringNum === 3 ||
        interval && interval.degree === 9 && rootString - stringNum === 3;
}

var getBG = (degree, scaleTone, isInVoicing) => {
    const def = '#BBB';
    switch (degree) {
        case 1:
            return isInVoicing ? 'red' : def;
        case 2:
            return def;
        case 3:
            return isInVoicing ? 'green' : def;
        case 4:
            return def;
        case 5:
            return def;
        case 6:
            return def;
        case 7:
            return isInVoicing ? 'blue' : def;
        case 9:
                return isInVoicing ? 'purple' : def;
        default:
            return scaleTone ? '#DDD' : '';
    }
}
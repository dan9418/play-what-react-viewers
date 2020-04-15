import * as React from "react";
import PW from 'play-what';
import Fretboard from "./Fretboard"


const parseLabelConfig = config => {
    switch (config.strategy) {
        case 'INTERVAL':
            return note => note ? note.interval.id : '';
        case 'DEGREE':
            return note => note ? note.interval.degree : '';
        case 'NAME':
            return note => note ? note.name : '';
        default:
            return null;
    }
}

const parseColorConfig = config => {
    switch (config.strategy) {
        case 'NONE':
            return () => PW.v2.Color.none();
        case 'BINARY':
            return note => PW.v2.Color.binary(note, config.args);
        case 'DEGREE':
            return note => PW.v2.Color.degree(note, config.args);
        case 'PITCH_CLASS':
            return note => PW.v2.Color.pitchClass(note, config.args);
        case 'OCTAVE':
            return (note, min, max) => PW.v2.Color.octave(note, min, max, config.args);
        case 'NOTE_INDEX':
            return (note, min, max) => PW.v2.Color.noteIndex(note, min, max, config.args);
        case 'FREQUENCY':
            return (note, min, max) => PW.v2.Color.frequency(note, min, max, config.args);
        default:
            return null;
    }
}

export const fromConfig = (fretboardConfig, noteConfig) => {

    const notes = PW.v2.parse(noteConfig);

    const fretMapping = {
        notes,
        labelFn: parseLabelConfig(fretboardConfig.fretMapping.label),
        colorFn: parseColorConfig(fretboardConfig.fretMapping.color)
    };

    return (
        <Fretboard
            {...fretboardConfig}
            fretMapping={fretMapping}
        />
    );
}
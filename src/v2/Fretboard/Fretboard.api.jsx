import * as React from "react";
import PW from 'play-what';
import Fretboard from "./Fretboard"


const parseLabelConfig = config => {
    switch (config.strategy) {
        case 'BINARY':
            return note => PW.v2.Label.binary(note, config.args);
        case 'DEGREE':
            return note => PW.v2.Label.degree(note, config.args);
        case 'INTERVAL':
            return note => PW.v2.Label.interval(note, config.args);
        case 'NAME':
            return note => PW.v2.Label.name(note, config.args);
        case 'PITCH_CLASS':
            return note => PW.v2.Label.pitchClass(note, config.args);
        case 'OCTAVE':
            return (note, min, max) => PW.v2.Label.octave(note, min, max, config.args);
        case 'NOTE_INDEX':
            return (note, min, max) => PW.v2.Label.noteIndex(note, min, max, config.args);
        case 'FREQUENCY':
            return (note, min, max) => PW.v2.Label.frequency(note, min, max, config.args);
        case 'NONE':
        default:
            return () => PW.v2.Color.none();
    }
}

const parseColorConfig = config => {
    switch (config.strategy) {
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
        case 'NONE':
        default:
            return () => PW.v2.Color.none();
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

export const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export const getDotsForFret = (fretNumber) => {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}
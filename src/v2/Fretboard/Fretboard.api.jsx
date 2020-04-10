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
            return note => note? note.name : '';
        default:
            return null;
    }
}

const parseColorConfig = config => {
    switch (config.strategy) {
        case 'PITCH_CLASS':
            return note => note.interval.id;
        case 'DEGREE':
            return note => PW.v2.Color.byDegree(note, config.args);
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
import * as React from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import DEFAULT_PROPS from "./Fretboard.defaults";

const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

const getFrets = (config) => {
    const { fretMap: strings } = config;
    //let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
    //let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

    const allFrets = [];

    for (let s = 0; s < strings.length; s++) {
        const frets = strings[s];

        for (let f = 0; f < frets.length; f++) {
            allFrets.push(
                <Fret
                    key={`s${s}-f${f}`}
                    config={frets[f]}
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

export default function Fretboard({ style, ...props }) {
    const config = Object.assign({}, DEFAULT_PROPS, props);
    // Calculate fretboard dimensions

    const fretRange = config.fretMap[0].length;
    const gridTemplateColumns = getFretRatios(fretRange).map(n => n + 'fr').join(' ');
    const gridTemplateRows = `repeat(${config.fretMap.length}, 1fr)`;
    const fretboardStyles = {
        gridTemplateColumns,
        gridTemplateRows,
        ...style
    };

    return (
        <div className='fretboard' style={fretboardStyles}>
            {getFrets(config)}
        </div>
    );
}
import * as React from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import DEFAULT_PROPS from "./Fretboard.defaults";
import PlayWhat from 'play-what';

const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

const getFrets = (config) => {
    let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
    let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

    let frets = [];
    // Get strings
    for (let strNum = 1; strNum <= config.strings.length; strNum++) {

        // Get frets for string
        for (let fretNum = config.fretLow; fretNum <= config.fretHigh; fretNum++) {
            let noteIndex = config.strings[strNum - 1].tuning + fretNum;

            frets.push(<Fret
                key={`s${strNum}f${fretNum}`}
                noteIndex={noteIndex}
                minIndex={min}
                maxIndex={max}
                fretNum={fretNum}
                stringNum={strNum}
                showFretNumber={config.showFretNumbers && strNum === 1}
                showFretDots={config.showDots && strNum === config.strings.length}
                labelComponent={config.labelComponent}
            />);
        }
    }
    return frets;
}

const getFretRatios = (numFrets) => {
    let ratios = [];
    for (let i = 1; i <= numFrets; i++) {
        ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
    }
    return ratios;
}

export default function Fretboard(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);
    // Calculate fretboard dimensions
    let fretRatioStyle = getFretRatios(config.fretHigh - config.fretLow + 1).map((num) => { return num + 'fr' }).join(' ');
    let fretboardScaleStyles = {
        gridTemplateColumns: fretRatioStyle,
        gridTemplateRows: `repeat(${config.strings.length}, 1fr)`
    };
    return (
        <div className='fretboard' style={fretboardScaleStyles}>
            {getFrets(config)}
        </div>
    );
}
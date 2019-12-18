import * as React from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import { DEFAULT_FRETBOARD_PROPS } from "./FretboardDefaults";

export const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

function getFrets(config) {
    let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
    let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;
    let viewerData = {
        minNote: config.mappingStrategy(min, config.keyCenter, config.concept),
        maxNote: config.mappingStrategy(max, config.keyCenter, config.concept),
        fretLow: config.fretLow,
        fretHigh: config.fretHigh,
        numStrings: config.strings.length,
        stringData: null,
        fretData: null
    }

    let frets = [];
    // Get strings
    for (let i = 0; i < config.strings.length; i++) {
        viewerData.stringData = { ...config.strings[i], number: i + i };

        // Get frets for string
        for (let j = config.fretLow; j <= config.fretHigh; j++) {
            let index = config.strings[i].tuning + j;

            viewerData.fretData = { number: j };

            let note = config.mappingStrategy(index, config.keyCenter, config.concept);
            note = config.noteFilter(note, viewerData) ? note : null;
            let styles = config.colorFilter(note, viewerData) ? config.colorStrategy(note, viewerData) : {};
            let label = config.labelFilter(note, viewerData) ? config.labelStrategy(note, viewerData) : '';
            let action = config.actionFilter(note, viewerData) ? config.actionStrategy(note, viewerData) : () => null;
            frets.push(<Fret
                key={`s${i}f${j}`}
                label={label}
                fretNumber={j}
                styles={styles}
                action={action}
                showFretNumber={config.showFretNumbers && i === 0}
                showFretDots={config.showDots && i === config.strings.length - 1}
            />);
        }
    }
    return frets;
}

function getFretRatios(numFrets) {
    let ratios = [];
    for (let i = 1; i <= numFrets; i++) {
        ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
    }
    return ratios;
}

export function Fretboard(props) {
    let config = Object.assign({}, DEFAULT_FRETBOARD_PROPS, props);
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
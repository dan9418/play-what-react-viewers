import * as React from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import DEFAULT_PROPS from "./Fretboard.defaults";
import { Theory } from 'play-what';

const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

function callConfigFunction(configFunction, ...args) {
    return ((typeof configFunction).toLowerCase() === 'function') ? configFunction.apply(null, args) : configFunction.fx.apply(null, args);
}

function getFrets(config) {
    let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
    let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

    let viewerData = {
        minNote: callConfigFunction(config.mapStrategy, min, config.keyCenter, config.concept),
        maxNote: callConfigFunction(config.mapStrategy, max, config.keyCenter, config.concept),
        fretLow: config.fretLow,
        fretHigh: config.fretHigh,
        numStrings: config.strings.length,
        stringData: null,
        fretData: null
    }

    let frets = [];
    // Get strings
    for (let strNum = 1; strNum <= config.strings.length; strNum++) {
        viewerData.stringData = { ...config.strings[strNum - 1], number: strNum };

        // Get frets for string
        for (let fretNum = config.fretLow; fretNum <= config.fretHigh; fretNum++) {
            let index = config.strings[strNum - 1].tuning + fretNum;

            viewerData.fretData = { number: fretNum };

            let note = callConfigFunction(config.mapStrategy, index, config.keyCenter, config.concept);
            note = callConfigFunction(config.noteFilter, note, viewerData) ? note : new Theory.NonfunctionalNote(index);
            let styles = callConfigFunction(config.colorFilter, note, viewerData) ? callConfigFunction(config.colorStrategy, note, viewerData) : {};
            let label = callConfigFunction(config.labelFilter, note, viewerData) ? callConfigFunction(config.labelStrategy, note, viewerData) : '';
            let action = callConfigFunction(config.actionFilter, note, viewerData) ? callConfigFunction(config.actionStrategy, note, viewerData) : () => null;

            frets.push(<Fret
                key={`s${strNum}f${fretNum}`}
                label={label}
                fretNumber={fretNum}
                styles={styles}
                action={action}
                showFretNumber={config.showFretNumbers && strNum === 0}
                showFretDots={config.showDots && strNum === config.strings.length - 1}
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
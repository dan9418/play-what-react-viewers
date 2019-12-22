import * as React from 'react';
import './RomanNumerals.css';
import { Theory, Strategies, Utils } from 'play-what';
import { ColorBy } from './RomanNumerals.strategies';
import DEFAULT_PROPS from './RomanNumerals.defaults';

function IntervalLabel(props) {
    return (
        <div
            className='interval-label'
            style={ColorBy.degree.fx({ interval: props.interval })}
        >
            {props.interval.id}
        </div>
    )
}

function RomanNumeralBlock(props) {
    return (
        <div
            className='roman-numeral-block'
            onClick={() => Utils.Sound.playNotes(props.romanNumeral.getNotes(props.keyCenter))}
        >
            <div className='header'>{props.romanNumeral.name}</div>
            {getIntervalTable(props.romanNumeral, props.keyCenter)}
        </div>
    )
}

function ConceptBlock(props) {
    return (
        <div
            className='concept-block'
        >
            <div className='header'>{props.concept.name}</div>
            {props.concept.intervals.map(i => <NoteBlock key={i.id} keyCenter={props.keyCenter} interval={i} />)}
        </div>
    )
}

function NoteBlock(props) {
    let note = new Theory.FunctionalNote(props.keyCenter, props.interval);
    return (
        <div
            className='note-block'
            style={ColorBy.degree.fx(note)}
            onClick={() => Utils.Sound.play(note.frequency, .5)}
        >
            <div className="name">{note.name}</div>
            <div>{'Interval: ' + note.interval.id}</div>
            <div>{'Note Index: ' + note.noteIndex}</div>
            <div>{'Pitch Class: ' + note.pitchClass}</div>
            <div>{'Octave: ' + note.octave}</div>
            <div>{'Frequency: ' + Math.round(note.frequency) + ' Hz'}</div>
        </div>
    )
}

function getIntervalTable(romanNumeral, keyCenter) {
    return (
        <table>
            <tbody>
                <tr>{romanNumeral.intervals.map((i) => <td key={i.id}>{(new Theory.FunctionalNote(keyCenter, i)).name}</td>)}</tr>
                <tr>{romanNumeral.intervals.map((i) => <td key={i.id}><IntervalLabel interval={i} /></td>)}</tr>
                <tr>{romanNumeral.relativeIntervals.map((i) => <td key={i.id}><IntervalLabel interval={i} /></td>)}</tr>
            </tbody>
        </table>
    );
}

export default function RomanNumerals(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);

    if (!config.concept || (!(config.concept instanceof Theory.ConceptTypes.HeptatonicScale) && !(config.concept instanceof Theory.ConceptTypes.RomanNumeral)))
        return null;

    let conceptIntervals = config.concept.intervals;
    return (
        <div className='roman-numerals'>
            <div>
                <ConceptBlock concept={config.concept} keyCenter={config.keyCenter} />
            </div>
            <div>
                {
                    conceptIntervals.map((ci) => {
                        let degree = ci.degree;
                        let romanNumeral = new Theory.ConceptTypes.RomanNumeral(config.concept, degree);
                        return <RomanNumeralBlock key={degree} romanNumeral={romanNumeral} keyCenter={config.keyCenter} />;
                    })
                }
            </div>
        </div>
    );
}
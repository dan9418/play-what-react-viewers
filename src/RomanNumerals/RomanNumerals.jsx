import * as React from 'react';
import './RomanNumerals.css';
import { Theory, Strategies, Utils } from 'play-what';
import { ColorBy } from './RomanNumerals.strategies';
import DEFAULT_PROPS from './RomanNumerals.defaults';

function IntervalLabel(props) {
    return (
        <div
            className='interval-label'
            style={ColorBy.degree({ interval: props.interval })}
        >
            {props.interval.id}
        </div>
    )
}

function RomanNumeralBlock(props) {
    return (
        <div
            className='roman-numeral-block'
        >
            <div className='header'>{props.romanNumeral.name}</div>
            {getIntervalTable(props.romanNumeral, props.keyCenter)}
        </div>
    )
}

function getIntervalTable(romanNumeral, keyCenter) {
    return (
        <table>
            <tbody>
                <tr>{romanNumeral.intervals.map((i) => <td>{(new Theory.FunctionalNote(keyCenter, i)).name}</td>)}</tr>
                <tr>{romanNumeral.intervals.map((i) => <td><IntervalLabel key={i.id} interval={i} /></td>)}</tr>
                <tr>{romanNumeral.relativeIntervals.map((i) => <td><IntervalLabel key={i.id} interval={i} /></td>)}</tr>
            </tbody>
        </table>
    );
}

function getIntervalLabels(intervals) {
    return <div>{intervals.map((i) => <IntervalLabel key={i.id} interval={i} />)}</div>;
}

export default function RomanNumerals(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);

    if (!config.concept || (!(config.concept instanceof Theory.ConceptTypes.HeptatonicScale) && !(config.concept instanceof Theory.ConceptTypes.RomanNumeral)))
        return null;

    let conceptIntervals = config.concept.intervals;
    return (
        <div className='roman-numerals'>
            {config.concept.name}

            <div>
                {getIntervalLabels(conceptIntervals)}
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
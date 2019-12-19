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
            <div>{props.romanNumeral.name}</div>
            {getIntervalLabels(props.romanNumeral.intervals)}
            {getIntervalLabels(props.romanNumeral.relativeIntervals)}
        </div>
    )
}

function getIntervalLabels(intervals) {
    return <div>{intervals.map((i) => <IntervalLabel key={i.id} interval={i} />)}</div>;
}

export default function RomanNumerals(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);

    if (!config.concept || (!(config.concept instanceof Theory.ConceptTypes.HeptatonicScale) && !(config.concept instanceof Theory.ConceptTypes.RomanNumeral)))
        return null;

    let conceptIntervals = config.concept.intervals;
    //let keyCenterIntervals = config.concept.intervals;
    //let relativeIntervals = props.romanNumeral.relativeIntervals;
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
                        return <RomanNumeralBlock key={degree} romanNumeral={romanNumeral} />;
                    })
                }
            </div>
        </div>
    );
}
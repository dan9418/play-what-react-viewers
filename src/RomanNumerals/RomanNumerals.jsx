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

export default function RomanNumerals(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);

    if (!config.concept || (!(config.concept instanceof Theory.ConceptTypes.HeptatonicScale) && !(config.concept instanceof Theory.ConceptTypes.RomanNumeral)))
        return null;

    let keyCenterIntervals = config.concept.intervals;
    //let relativeIntervals = props.romanNumeral.relativeIntervals;
    return (
        <div className='roman-numerals'>
            {config.concept.name}
            
            <div>
                {keyCenterIntervals.map((i) =>
                    <IntervalLabel key={i.id} interval={i} />
                )}
            </div>
            {/*<div>
                {relativeIntervals.map((i) =>
                    <IntervalLabel key={i.id} interval={i} />
                )}
            </div>
            */}
        </div>
    );
}
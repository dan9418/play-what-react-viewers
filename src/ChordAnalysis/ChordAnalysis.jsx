import * as React from 'react';
import './ChordAnalysis.css';
import RomanNumeralBlock from '../RomanNumeralBlock/RomanNumeralBlock';
import { Theory, Strategies, Utils } from 'play-what';

export default function ChordAnalysis(props) {
    let concept = null;
    if (props.concept instanceof Theory.ConceptTypes.HeptatonicScale) {
        concept = props.concept;
    }
    else if (props.concept instanceof Theory.ConceptTypes.RomanNumeral) {
        concept = props.concept.sourceScale;
    }
    else {
        return null;
    }

    return (
        <div className='chord-analysis'>
            {
                concept.intervals.map((ci) => {
                    let degree = ci.degree;
                    let romanNumeral = new Theory.ConceptTypes.RomanNumeral(concept, degree);
                    return <RomanNumeralBlock key={degree} romanNumeral={romanNumeral} keyCenter={props.keyCenter} />;
                })
            }
        </div>
    );
}
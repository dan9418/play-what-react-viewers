import * as React from 'react';
import './ChordAnalysis.css';
import RomanNumeralBlock from '../RomanNumeralBlock/RomanNumeralBlock';
import PlayWhat from 'play-what';

export default function ChordAnalysis(props) {
    let concept = null;
    if (props.concept instanceof PlayWhat.ConceptTypes.HeptatonicScale) {
        concept = props.concept;
    }
    else if (props.concept instanceof PlayWhat.ConceptTypes.RomanNumeral) {
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
                    let romanNumeral = new PlayWhat.ConceptTypes.RomanNumeral(concept, degree);
                    return <RomanNumeralBlock key={degree} romanNumeral={romanNumeral} keyCenter={props.keyCenter} />;
                })
            }
        </div>
    );
}
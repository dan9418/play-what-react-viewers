import React from 'react';
import './Concept.css';
import PW from 'play-what';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const Concept = ({ source }) => {
    return (
        <div className="concept">
            <ConceptInput note={source} setNote={() => null} />
        </div>
    );
}

export default Concept;
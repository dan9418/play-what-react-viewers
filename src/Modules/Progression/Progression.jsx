import React from 'react';
import './Progression.css';
import PW from 'play-what';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const Progression = ({ source }) => {
    return (
        <div className="progression">
            <ConceptInput note={source} setNote={() => null} />
        </div>
    );
}

export default Progression;
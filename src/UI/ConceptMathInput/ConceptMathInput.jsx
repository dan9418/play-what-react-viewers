import React from 'react';
import './ConceptMathInput.css';

import PW from 'play-what';
import VectorInput from '../VectorInput/VectorInput';
import MatrixInput from '../MatrixInput/MatrixInput';

const ConceptMathInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-math-input">
            a:
            <VectorInput value={keyCenter} setValue={setKeyCenter} />
            B:
            <MatrixInput value={intervals} setValue={setIntervals} />
        </div>
    );
}

export default ConceptMathInput;
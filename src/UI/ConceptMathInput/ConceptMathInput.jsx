import React from 'react';
import './ConceptMathInput.css';

import PW from 'play-what';
import VectorInput from '../VectorInput/VectorInput';
import MatrixInput from '../MatrixInput/MatrixInput';

const ConceptMathInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-math-input pw-input-block-group">
            <label>a</label>
            <div className="pw-input-block">
                <VectorInput value={keyCenter} setValue={setKeyCenter} />
            </div>
            <label>B</label>
            <div className="pw-input-block">
                <MatrixInput value={intervals} setValue={setIntervals} />
            </div>
        </div>
    );
}

export default ConceptMathInput;
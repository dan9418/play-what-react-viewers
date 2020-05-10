import React from 'react';
import './ConceptIntervalsInput.css';

import PW from 'play-what';
import VectorInput from '../VectorInput/VectorInput';
import MatrixInput from '../MatrixInput/MatrixInput';

const ConceptIntervalsInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-intervals-input">
            a:
            <VectorInput value={keyCenter} setValue={setKeyCenter} />
            B:
            <MatrixInput value={intervals} setValue={setIntervals} />
        </div>
    );
}

export default ConceptIntervalsInput;
import React from 'react';
import './ConceptIntervalsInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';

const ConceptIntervalsInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-intervals-input">
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
        </div>
    );
}

export default ConceptIntervalsInput;
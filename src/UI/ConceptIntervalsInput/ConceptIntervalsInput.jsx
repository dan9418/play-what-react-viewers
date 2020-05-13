import React from 'react';
import './ConceptIntervalsInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import IntervalListInput from '../IntervalListInput/IntervalListInput';

const ConceptIntervalsInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-intervals-input">
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            <IntervalListInput intervals={intervals} setIntervals={setIntervals} />
        </div>
    );
}

export default ConceptIntervalsInput;
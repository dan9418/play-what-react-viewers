import React from 'react';
import './ConceptIntervalsInput.css';
import PW from 'play-what';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import IntervalListInput from '../IntervalListInput/IntervalListInput';

const ConceptIntervalsInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-intervals-input pw-input-block-group">
            <label>Key Center</label>
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            <label>Intervals</label>
            <IntervalListInput intervals={intervals} setIntervals={setIntervals} />
        </div>
    );
}

export default ConceptIntervalsInput;
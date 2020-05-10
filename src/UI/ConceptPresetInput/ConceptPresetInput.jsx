import React from 'react';
import './ConceptPresetInput.css';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import PW from 'play-what';

const ConceptPresetInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;

    return (
        <div className="concept-preset-input">
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
        </div>
    );
}

export default ConceptPresetInput;
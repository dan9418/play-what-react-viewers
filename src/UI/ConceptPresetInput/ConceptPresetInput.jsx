import React from 'react';
import './ConceptPresetInput.css';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import PW from 'play-what';
import PresetInput from '../PresetInput/PresetInput';

const ConceptPresetInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;
    const preset = null; const setPreset = null;

    return (
        <div className="concept-preset-input">
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            <PresetInput preset={preset} setPreset={setPreset} />
        </div>
    );
}

export default ConceptPresetInput;
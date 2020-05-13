import React from 'react';
import './ConceptPresetInput.css';
import KeyCenterInput from '../KeyCenterInput/KeyCenterInput';
import PW from 'play-what';
import PresetInput from '../PresetInput/PresetInput';

const CUSTOM_PRESET = {
    id: 'custom',
    name: 'Custom',
    intervals: []
};

const areIntervalsEqual = (a, b) => {
    if (!a || !b) return false;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        const _a = a[i];
        const _b = b[i]
        if (_a.p !== _b.p || _a.d !== _b.d)
            return false;
    }
    return true;
}

const findPreset = intervals => {
    const preset = PW.Presets.CONCEPT_PRESET_VALUES.find(p => areIntervalsEqual(intervals, p.intervals));
    return preset ? preset : { ...CUSTOM_PRESET, intervals: intervals }
}

const ConceptPresetInput = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;
    const preset = findPreset(intervals);
    const setPreset = newIntervals => setIntervals(newIntervals);

    return (
        <div className="concept-preset-input">
            <KeyCenterInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} />
            <PresetInput preset={preset} setPreset={setPreset} />
        </div>
    );
}

export default ConceptPresetInput;
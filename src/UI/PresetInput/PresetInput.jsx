import React, { useState } from 'react';
import './PresetInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';

const CUSTOM_PRESET = {
    id: 'custom',
    name: 'Custom',
    intervals: []
};

const PRESET_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        options: [...PW.Presets.INTERVAL_PAIR_VALUES, CUSTOM_PRESET]
    },
    {
        id: 'chord',
        name: 'Chord',
        options: [...PW.Presets.CHORD_VALUES, CUSTOM_PRESET]
    },
    {
        id: 'scale',
        name: 'Scale',
        options: [...PW.Presets.SCALE_VALUES, CUSTOM_PRESET]
    },
    {
        id: 'mode',
        name: 'Mode',
        options: [...PW.Presets.QUICK_MODE_VALUES, CUSTOM_PRESET]
    }
];

const PresetInput = props => {
    const { preset, setPreset } = props;

    const [presetType, setPresetType] = useState(PRESET_TYPES[1]);

    const SpecificInput = presetType.component;

    return (
        <div className='preset-input pw-input-block'>
            <label>Concept Type</label>
            <Dropdown value={presetType} setValue={setPresetType} options={PRESET_TYPES} />
            <label>{presetType.name} Value</label>
            <Dropdown value={preset} setValue={v => setPreset(v.intervals)} options={presetType.options} />
        </div>
    );
}

export default PresetInput;
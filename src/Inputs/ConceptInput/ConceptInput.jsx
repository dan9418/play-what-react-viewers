import React from 'react';
import './ConceptInput.css';
import DropdownInput from '../DropdownInput/DropdownInput';
import { Theory } from 'play-what';

const PRESET_TYPES = [
    {
        id: 'intervalPair',
        name: 'Interval Pair',
        presets: Object.values(Theory.Presets.INTERVAL_PAIR)
    },
    {
        id: 'chord',
        name: 'Chord',
        presets: Object.values(Theory.Presets.CHORD)
    },
    {
        id: 'scale',
        name: 'Scale',
        presets: Object.values(Theory.Presets.SCALE)
    },
    {
        id: 'mode',
        name: 'Mode',
        presets: Object.values(Theory.Presets.MODE)
    }
];

export default class ConceptInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: PRESET_TYPES[0],
            selectedPreset: PRESET_TYPES[0].presets[0]
        }
    }
    render() {
        return (
            <div
                className='concept-input'
            >
                <div className='input-row'>
                    <label>Preset Type:</label>
                    <DropdownInput
                        data={PRESET_TYPES}
                        value={this.state.selectedType}
                        setValue={(type) => this.setState({ selectedType: type })}
                    />
                </div>

                <div className='input-row'>
                    <label>{this.state.selectedType.name}:</label>
                    <DropdownInput
                        data={this.state.selectedType.presets}
                        value={this.state.selectedPreset}
                        setValue={(preset) => {
                            // Not sure if safe to update both states like this...
                            this.setState({ selectedPreset: preset });
                            this.props.setConcept(preset);
                        }}
                    />
                </div>
            </div>
        );
    }
}
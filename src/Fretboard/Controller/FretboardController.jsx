import * as React from 'react';
import './FretboardController.css';
import DEFAULTS from '../Fretboard.defaults';
import Fretboard from '../Fretboard';
import { Strategies } from 'play-what';
import * as FretboardStrategies from '../Fretboard.strategies';
import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';

const STRATEGY_DATA = [
    {
        id: 'colorStrategy',
        name: 'Color Strategy',
        data: [
            {
                id: 'none',
                name: 'None',
                fx: FretboardStrategies.ColorBy.none
            },
            {
                id: 'binary',
                name: 'Binary',
                fx: FretboardStrategies.ColorBy.binary
            },
            {
                id: 'degree',
                name: 'Degree',
                fx: FretboardStrategies.ColorBy.degree
            },
            {
                id: 'pitchClass',
                name: 'Pitch Class',
                fx: FretboardStrategies.ColorBy.pitchClass
            },
            {
                id: 'noteIndex',
                name: 'Note Index',
                fx: FretboardStrategies.ColorBy.noteIndex
            },
            {
                id: 'frequency',
                name: 'Frequency',
                fx: FretboardStrategies.ColorBy.frequency
            },
            {
                id: 'octave',
                name: 'Octave',
                fx: FretboardStrategies.ColorBy.octave
            },
            {
                id: 'stringNumber',
                name: 'String Number',
                fx: FretboardStrategies.ColorBy.stringNumber
            },
            {
                id: 'fretNumber',
                name: 'Fret Number',
                fx: FretboardStrategies.ColorBy.fretNumber
            }
        ]
    }
];

export default class FretboardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...DEFAULTS }
    }

    getStrategyInput(strategy) {
        return (
            <div className='strategy-input' key={strategy.id} >
                <label>{strategy.name + ': '}</label>
                <DropdownInput value={this.state[strategy.id]} data={strategy.data} setValue={(value) => this.setState({ [strategy.id]: value.fx })} />
            </div>
        );
    }

    getStrategyInputs() {
        let inputs = [];
        for (let i = 0; i < STRATEGY_DATA.length; i++) {
            let strategy = STRATEGY_DATA[i];
            inputs.push(this.getStrategyInput(strategy));
        }
        return inputs;
    }

    render() {
        return (
            <div className='fretboard-controller'>
                <h1>Fretboard</h1>
                {this.getStrategyInputs()}
                <Fretboard {...this.state} />
            </div>
        );
    }
}
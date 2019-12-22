import * as React from 'react';
import './FretboardController.css';
import DEFAULTS from '../Fretboard.defaults';
import Fretboard from '../Fretboard';
import { Strategies } from 'play-what';
import * as FretboardStrategies from '../Fretboard.strategies';
import DropdownInput from '../../Inputs/DropdownInput/DropdownInput';
import KeyCenterInput from '../../Inputs/KeyCenterInput/KeyCenterInput';
import ConceptInput from '../../Inputs/ConceptInput/ConceptInput';

const INPUT_DATA = [
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: KeyCenterInput
    },
    {
        id: 'concept',
        name: 'Concept',
        component: ConceptInput
    },
    {
        id: 'colorStrategy',
        component: DropdownInput,
        name: 'Color Strategy',
        props: {
            data: Object.values(FretboardStrategies.ColorBy)
        },
    },
    {
        id: 'labelStrategy',
        component: DropdownInput,
        name: 'Label Strategy',
        props: {
            data: Object.values(FretboardStrategies.LabelBy)
        },
    },
    {
        id: 'mapStrategy',
        component: DropdownInput,
        name: 'Map Strategy',
        props: {
            data: Object.values(Strategies.MapBy)
        },
    }
];

export default class FretboardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...DEFAULTS }
    }

    getInput(inputData) {
        let Comp = inputData.component;
        return (
            <div className='strategy-input' key={inputData.id} >
                <label>{inputData.name + ': '}</label>
                <Comp value={this.state[inputData.id]} setValue={(value) => this.setState({ [inputData.id]: value })} {...inputData.props} />
            </div>
        );
    }

    getInputs() {
        let inputs = [];
        for (let i = 0; i < INPUT_DATA.length; i++) {
            let inputData = INPUT_DATA[i];
            inputs.push(this.getInput(inputData));
        }
        return inputs;
    }

    render() {
        return (
            <div className='fretboard-controller'>
                <h1>Fretboard</h1>
                {this.getInputs()}
                <Fretboard {...this.state} />
            </div>
        );
    }
}
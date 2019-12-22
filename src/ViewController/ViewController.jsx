import * as React from 'react';
import './ViewController.css';
import RomanNumerals from '../RomanNumerals/RomanNumerals';

export default class ViewController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.defaults }
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

    getInputs(data) {
        let inputs = [];
        for (let i = 0; i < data.length; i++) {
            let inputData = data[i];
            inputs.push(this.getInput(inputData));
        }
        return inputs;
    }

    render() {
        let Viewer = this.props.viewer;
        return (
            <div className='fretboard-controller'>
                <h1>Fretboard</h1>
                {this.getInputs(this.props.inputs)}
                <RomanNumerals {...this.state} />
                <Viewer {...this.state} />
            </div>
        );
    }
}
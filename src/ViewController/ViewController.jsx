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

    getInputs() {
        let inputs = [];
        for (let i = 0; i < this.props.inputs.length; i++) {
            let inputData = this.props.inputs[i];
            inputs.push(this.getInput(inputData));
        }
        return inputs;
    }

    getOutputs() {
        let outputs = [];
        for (let i = 0; i < this.props.outputs.length; i++) {
            let outputData = this.props.outputs[i];
            let Comp = outputData.component;
            outputs.push(<Comp key={outputData.id} {...this.state} {...this.props.parentState} />);
        }
        return outputs;
    }

    getChildren() {
        if(!this.props.children)
            return null;
        let children = [];
        for (let i = 0; i < this.props.children.length; i++) {
            let child = this.props.children[i];
            let parentState = Object.assign({}, this.state, this.props.parentState)
            children.push(<ViewController key={child.id} parentState={parentState} {...child} />);
        }
        return children;
    }

    render() {
        return (
            <div className='fretboard-controller'>
                <h1>{this.props.name}</h1>
                {this.getInputs()}
                {this.getOutputs()}
                {this.getChildren()}
            </div>
        );
    }
}
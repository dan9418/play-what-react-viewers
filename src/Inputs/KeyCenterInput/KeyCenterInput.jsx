import * as React from 'react';
import './KeyCenterInput.css';
import ButtonList from '../ButtonList/ButtonList';
import { Theory } from 'play-what';
import NumericInput from '../NumericInput/NumericInput';

export default function KeyCenterInput(props) {
    return (
        <div
            className='key-center-input'
        >
            <div className='tonic'>
                <ButtonList
                    selected={props.keyCenter.tonic}
                    data={Object.values(Theory.Constants.TONIC)}
                    setValue={(tonic) => props.setKeyCenter(new Theory.KeyCenter(tonic, props.keyCenter.accidental, props.keyCenter.octave))}
                />
            </div>
            <div className='accidental'>
                <ButtonList
                    selected={props.keyCenter.accidental}
                    data={Object.values(Theory.Constants.ACCIDENTAL)}
                    setValue={(accidental) => props.setKeyCenter(new Theory.KeyCenter(props.keyCenter.tonic, accidental, props.keyCenter.octave))}
                />
            </div>
            <div className='octave'>
                <NumericInput
                    value={props.keyCenter.octave}
                    setValue={(octave) => props.setKeyCenter(new Theory.KeyCenter(props.keyCenter.tonic, props.keyCenter.accidental, octave))}
                />
            </div>
        </div>
    );
}
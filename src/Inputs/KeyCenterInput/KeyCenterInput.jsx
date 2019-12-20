import * as React from 'react';
import './KeyCenterInput.css';
import ButtonList from '../ButtonList/ButtonList';
import { Theory } from 'play-what';
import { TONIC } from 'play-what/src/Theory/Constants';
import NumericInput from '../NumericInput/NumericInput';

export default function KeyCenterInput(props) {
    return (
        <div
            className='key-center-input'
        >
            <div className='tonic'>
                <ButtonList selected={props.keyCenter.tonic} data={Object.values(Theory.Constants.TONIC)} setValue={d => console.log(d)}/>
            </div>
            <div className='accidental'>
                <ButtonList selected={props.keyCenter.accidental} data={Object.values(Theory.Constants.ACCIDENTAL)} setValue={d => console.log(d)}/>
            </div>
            <div className='octave'>
                <NumericInput value={props.keyCenter.octave} setValue={d => console.log(d)} />
            </div>
        </div>
    );
}
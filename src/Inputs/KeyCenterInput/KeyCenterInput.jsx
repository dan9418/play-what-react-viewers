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
            <div className='input-row tonic'>
                <div className='input-row-label'>Tonic</div>
                <ButtonList
                    selected={props.value.tonic}
                    data={Object.values(Theory.Constants.TONIC)}
                    setValue={(tonic) => props.setValue(new Theory.KeyCenter(tonic, props.value.accidental, props.value.octave))}
                />
            </div>
            <div className='input-row accidental'>
                <div className='input-row-label'>Accidental</div>
                <ButtonList
                    selected={props.value.accidental}
                    data={Object.values(Theory.Constants.ACCIDENTAL)}
                    setValue={(accidental) => props.setValue(new Theory.KeyCenter(props.value.tonic, accidental, props.value.octave))}
                />
            </div>
            <div className='input-row octave'>
                <div className='input-row-label'>Octave</div>
                <NumericInput
                    value={props.value.octave}
                    setValue={(octave) => props.setValue(new Theory.KeyCenter(props.value.tonic, props.value.accidental, octave))}
                />
            </div>
        </div>
    );
}
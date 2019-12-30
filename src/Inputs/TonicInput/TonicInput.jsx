import * as React from 'react';
import './TonicInput.css';
import ButtonList from '../ButtonList/ButtonList';
import { Theory } from 'play-what';

export default function TonicInput(props) {
    return (
        <div className='input tonic'>
            <ButtonList
                selected={props.value}
                data={Object.values(Theory.Constants.TONIC)}
                setValue={props.setValue}
            />
        </div>
    );
}
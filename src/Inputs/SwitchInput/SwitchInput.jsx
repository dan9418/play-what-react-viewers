import * as React from 'react';
import './SwitchInput.css';
import BoxButton from '../BoxButton/BoxButton';

export default function SwitchInput(props) {
    return (
        <div
            className='switch-input'
        >
            <BoxButton className='left' text={'N'} selected={!props.value} action={() => props.setValue(!props.value)} />
            <BoxButton className='right' text={'Y'} selected={props.value} action={() => props.setValue(!props.value)} />
        </div>
    );
}
import React, { useState } from "react";
import "./KeyCenterPanel.css";
import Inputs from '../../Inputs/_module';
import PlayWhat from 'play-what';

const setKeyCenter = (setKeyCenter, tonic, accidental, octave) => setKeyCenter(new PlayWhat.KeyCenter(tonic, accidental, octave));

const KeyCenterPanel = props => (
    <div className='key-center-panel'>
        <div className='labeled-input'>
            <div className='label-text'>Tonic</div>
            <Inputs.TonicInput value={props.keyCenter.tonic} setValue={tonic => setKeyCenter(props.setKeyCenter, tonic, props.keyCenter.accidental, props.keyCenter.octave)} />
        </div>
        <div className='labeled-input'>
            <div className='label-text'>Accidental</div>
            <Inputs.AccidentalInput value={props.keyCenter.accidental} setValue={accidental => setKeyCenter(props.setKeyCenter, props.keyCenter.tonic, accidental, props.keyCenter.octave)} />
        </div>
        <div className='labeled-input'>
            <div className='label-text'>Octave</div>
            <Inputs.NumericInput value={props.keyCenter.octave} setValue={octave => setKeyCenter(props.setKeyCenter, props.keyCenter.tonic, props.keyCenter.accidental, octave)} />
        </div>
    </div>
);

export default KeyCenterPanel;
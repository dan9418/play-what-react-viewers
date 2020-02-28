import React, { useState } from "react";
import "./KeyCenterPanel.css";
import Inputs from '../../Inputs/_module';
import PlayWhat from 'play-what';

const KeyCenterPanel = props => (
    <div className='key-center-panel'>
        <div className='labeled-input'>
            <div className='label-text'>Tonic</div>
            <Inputs.TonicInput value={PlayWhat.Constants.TONIC.C} setValue={() => null}/>
        </div>
        <div className='labeled-input'>
            <div className='label-text'>Accidental</div>
            <Inputs.AccidentalInput value={PlayWhat.Constants.ACCIDENTAL.Natural} setValue={() => null}/>
        </div>
        <div className='labeled-input'>
            <div className='label-text'>Octave</div>
            <Inputs.NumericInput value={4} setValue={() => null}/>
        </div>
    </div>
);

export default KeyCenterPanel;
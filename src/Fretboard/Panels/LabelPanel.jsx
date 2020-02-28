import React, { useState } from "react";
import "./LabelPanel.css";
import Inputs from '../../Inputs/_module';
import PlayWhat from 'play-what';

const LabelPanel = props => (
    <div className='label-panel'>
        <div className='labeled-input'>
            <div className='label-text'>Fret Numbers</div>
            <Inputs.SwitchInput value={props.showFretNumbers} setValue={props.setShowFretNumbers} />
        </div>

        <div className='labeled-input'>
            <div className='label-text'>String Tunings</div>
            <Inputs.SwitchInput value={false} setValue={() => { }} />
        </div>

        <div className='labeled-input'>
            <div className='label-text'>Fret Dots</div>
            <Inputs.SwitchInput value={props.showDots} setValue={props.setShowDots} />
        </div>
    </div>
);

export default LabelPanel;
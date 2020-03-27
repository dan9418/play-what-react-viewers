import React, { useState } from "react";
import "./RangePanel.css";
import Inputs from '../../Inputs/_module';
import PlayWhat from 'play-what';

const RangePanel = props => (
    <div className='range-panel'>
        <div className='labeled-input'>
            <div className='label-text'>Frets</div>
            <Inputs.RangeInput min={0} max={24} low={props.fretLow} high={props.fretHigh} setLowValue={props.setFretLow} setHighValue={props.setFretHigh} />
        </div>

        <div className='labeled-input'>
            <div className='label-text'>Strings</div>
            <Inputs.RangeInput min={1} max={12} low={1} high={props.strings.length} setHighValue={v => props.setStringNumber(strings, setStrings, v)} fixed={true} />
        </div>
    </div>
);

export default RangePanel;
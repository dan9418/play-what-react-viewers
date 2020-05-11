import React from 'react';
import './IntervalInput.css';

import PW from 'play-what';
import Dropdown from '../Dropdown/Dropdown';

const DATA = PW.Presets.INTERVALS_VALUES;

const IntervalInput = props => {
    const { ivl, setIvl } = props;

    const disabled = typeof value === 'undefined' || typeof value === null;

    return (
        <Dropdown options={DATA} disabled={disabled} value={ivl} setValue={setIvl} displayProperty='id' />
    );
}

export default IntervalInput;

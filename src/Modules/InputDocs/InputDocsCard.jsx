import React, { useState } from 'react';

import './InputDocs.css';

import Card from '../../UI/Card/Card';
import DropdownInput from '../../UI/Dropdown/Dropdown';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import ButtonInput from '../../UI/ButtonInput/ButtonInput';
import VectorInput from '../../UI/VectorInput/VectorInput';

const DATA_A = { id: 'a', name: 'a', p: 0, d: 0 };
const DATA_B = { id: 'b', name: 'b', p: 1, d: 1 };

const DATA = [DATA_A, DATA_B];

const InputDocsCard = ({ defaultOpen }) => {
    const [dropdownValue, setDropdownValue] = useState(DATA_A);
    const [switchValue, setSwitchValue] = useState(true);
    const [scalarValue, setScalarValue] = useState(0);
    const [vectorValue, setVectorValue] = useState(DATA_A);

    return (
        <Card title="Input Docs" defaultOpen={defaultOpen}>
            <div className="row">
                <DropdownInput options={DATA} value={dropdownValue} setValue={setDropdownValue} />
            </div>
            <div className="row">
                <SwitchInput value={switchValue} setValue={setSwitchValue} />
            </div>
            <div className="row">
                <ScalarInput value={scalarValue} setValue={setScalarValue} />
            </div>
            <div className="row">
                <VectorInput value={vectorValue} setValue={setVectorValue} />
            </div>
            <div className="row">
                <ButtonInput disabled={false} onClick={null} >Click Me</ButtonInput>
            </div>
            <div className="row">
                <ButtonInput disabled={false} onClick={null} >Click Me</ButtonInput>
            </div>
        </Card>
    )
}

export default InputDocsCard;
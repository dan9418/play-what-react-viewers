import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Card from '../../UI/Card/Card';
import PW from 'play-what';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';

const KeyboardCard = ({ defaultOpen, back }) => {
    const [keyLow, setKeyLow] = useState(0);
    const [keyHigh, setKeyHigh] = useState(25);

    return (
        <Card title="Keyboard" defaultOpen={defaultOpen} back={back}>

            <div className="center">
                <Keyboard
                    keyLow={keyLow}
                    keyHigh={keyHigh}
                />
            </div>

            <ConceptInput />

            <InputBlock title="Key Range">
                <LabeledInput label="Low">
                    <ScalarInput value={keyLow} setValue={setKeyLow} />
                </LabeledInput>
                <LabeledInput label="High">
                    <ScalarInput value={keyHigh} setValue={setKeyHigh} />
                </LabeledInput>
            </InputBlock>
        </Card>
    )
}

export default KeyboardCard;
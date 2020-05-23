import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Card from '../../UI/Card/Card';
import PW from 'play-what';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';

const KeyboardCard = ({ defaultOpen, back }) => {
    const [keyCenter, setKeyCenter] = useState(PW.Presets.KEY_CENTERS.A);
    const [intervals, setIntervals] = useState(PW.Presets.SCALE.NaturalMinor.intervals);

    const [keyLow, setKeyLow] = useState(0);
    const [keyHigh, setKeyHigh] = useState(25);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals)

    return (
        <Card title="Keyboard" defaultOpen={defaultOpen} back={back}>
            <Keyboard
                notes={notes}
                keyLow={keyLow}
                keyHigh={keyHigh}
            />

            <ConceptInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />

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
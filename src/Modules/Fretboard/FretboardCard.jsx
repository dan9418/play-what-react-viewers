import React, { useState } from 'react';
import PW from 'play-what';

import Card from '../../UI/Card/Card';
import Fretboard from './Fretboard';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';

const FretboardCard = ({ defaultOpen }) => {
    const [keyCenter, setKeyCenter] = useState(PW.Presets.KEY_CENTERS.A);
    const [intervals, setIntervals] = useState(PW.Presets.SCALE.NaturalMinor.intervals);

    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);

    return (
        <Card title="Fretboard" defaultOpen={defaultOpen}>
            <Fretboard
                keyCenter={keyCenter}
                intervals={intervals}
                fretLow={fretLow}
                fretHigh={fretHigh}
                showDots={showDots}
                showFretNumbers={showFretNumbers}
            />

            <ConceptInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />

            <InputBlock title="Fret Range">
                <LabeledInput label="Low Fret">
                    <ScalarInput value={fretLow} setValue={setFretLow} />
                </LabeledInput>
                <LabeledInput label="High Fret">
                    <ScalarInput value={fretHigh} setValue={setFretHigh} />
                </LabeledInput>
            </InputBlock>
            <InputBlock title="Labels">
                <LabeledInput label="Fret Dots">
                    <SwitchInput value={showDots} setValue={setShowDots} />
                </LabeledInput>
                <LabeledInput label="Fret Numbers">
                    <SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                </LabeledInput>
            </InputBlock>
        </Card>
    )
}

export default FretboardCard;
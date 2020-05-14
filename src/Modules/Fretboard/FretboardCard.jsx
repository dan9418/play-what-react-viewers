import React, { useState } from 'react';
import PW from 'play-what';

import Card from '../../UI/Card/Card';
import Fretboard from './Fretboard';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';

const FretboardCard = ({ defaultOpen }) => {
    const [keyCenter, setKeyCenter] = useState(PW.Presets.KEY_CENTERS.A);
    const [intervals, setIntervals] = useState(PW.Presets.SCALE.NaturalMinor.intervals);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals);

    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);

    return (
        <Card title="Fretboard" defaultOpen={defaultOpen}>
            <Fretboard
                notes={notes}
                fretLow={fretLow}
                fretHigh={fretHigh}
                showDots={showDots}
                showFretNumbers={showFretNumbers}
            />

            <ConceptInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />

            <label>Low Fret:</label>
            <ScalarInput value={fretLow} setValue={setFretLow} />
            <label>High Fret:</label>
            <ScalarInput value={fretHigh} setValue={setFretHigh} />
            <label>Show Dots:</label>
            <SwitchInput value={showDots} setValue={setShowDots} />
            <label>Show Fret Numbers:</label>
            <SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
        </Card>
    )
}

export default FretboardCard;
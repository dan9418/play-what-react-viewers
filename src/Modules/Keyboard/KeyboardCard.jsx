import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Card from '../../UI/Card/Card';
import PW from 'play-what';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const KeyboardCard = ({ defaultOpen }) => {
    const [keyCenter, setKeyCenter] = useState(PW.Presets.KEY_CENTERS.A);
    const [intervals, setIntervals] = useState(PW.Presets.SCALE.NaturalMinor.intervals);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals)

    return (
        <Card title="Keyboard" defaultOpen={defaultOpen}>
            <Keyboard 
                notes={notes}
            />
            <ConceptInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />
        </Card>
    )
}

export default KeyboardCard;
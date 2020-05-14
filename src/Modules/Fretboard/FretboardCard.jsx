import React, { useState } from 'react';
import PW from 'play-what';

import Card from '../../UI/Card/Card';
import Fretboard from './Fretboard';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const FretboardCard = ({ defaultOpen }) => {
    const [keyCenter, setKeyCenter] = useState(PW.Presets.KEY_CENTERS.A);
    const [intervals, setIntervals] = useState(PW.Presets.SCALE.NaturalMinor.intervals);

    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals)

    return (
        <Card title="Fretboard" defaultOpen={defaultOpen}>
            <Fretboard
                notes={notes}
            />
            <ConceptInput keyCenter={keyCenter} setKeyCenter={setKeyCenter} intervals={intervals} setIntervals={setIntervals} />
        </Card>
    )
}

export default FretboardCard;
import React, { useState } from 'react';
import PW from 'play-what';

import Card from '../../UI/Card/Card';
import Fretboard from './Fretboard';

const NOTES = PW.Theory.addVectorsBatch(PW.Presets.KEY_CENTERS.A, PW.Presets.SCALE.NaturalMinor.intervals);

const FretboardCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <Card title="Fretboard" defaultOpen>
            <Fretboard
                notes={NOTES}
            />
        </Card>
    )
}

export default FretboardCard;
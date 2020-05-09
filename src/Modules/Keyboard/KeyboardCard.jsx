import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Card from '../../UI/Card/Card';
import PW from 'play-what';

const NOTES = PW.Theory.addVectorsBatch(PW.Presets.KEY_CENTERS.A, PW.Presets.SCALE.NaturalMinor.intervals);

const KeyboardCard = ({ defaultOpen }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card title="Keyboard" defaultOpen={defaultOpen}>
            <Keyboard 
                notes={NOTES}
            />
        </Card>
    )
}

export default KeyboardCard;
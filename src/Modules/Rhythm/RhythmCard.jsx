import React, { useState } from 'react';
import PW from 'play-what';
import './Rhythm.css';
import Card from '../../UI/Card/Card';
import Rhythm from './Rhythm';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const MAX_VECTOR = PW.Constants.MAX_VECTOR;
const ORIGIN = { p: 0, d: 2 };
const VECTORS = [
    { d: 0, p: 0 },
    { d: 2, p: 4 },
    { d: 4, p: 7 },
    { d: 6, p: 11 }
];

const RhythmCard = ({ defaultOpen, back }) => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);

    return (
        <Card title="Rhythm" defaultOpen={defaultOpen} back={back}>
            <div className="rhythm-card">
                    <Rhythm />
            </div>
        </Card>
    )
}

export default RhythmCard;
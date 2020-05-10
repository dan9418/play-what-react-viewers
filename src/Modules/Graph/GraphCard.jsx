import React, { useState } from 'react';
import PW from 'play-what';

import Graph from './Graph';
import ConceptMathInput from "../../UI/ConceptMathInput/ConceptMathInput";
import ScalerInput from '../../UI/ScalarInput/ScalerInput';

const MAX_VECTOR = PW.Constants.MAX_VECTOR;
const ORIGIN = { p: 0, d: 2 };
const VECTORS = [
    { d: 0, p: 0 },
    { d: 2, p: 4 },
    { d: 4, p: 7 },
    { d: 6, p: 11 }
];

import Card from '../../UI/Card/Card';
import './Graph.css';
import ConceptPresetInput from '../../UI/ConceptPresetInput/ConceptPresetInput';

const GraphCard = ({ defaultOpen }) => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);
    const [mode, setMode] = useState(0);

    return (
        <Card title="Graph" defaultOpen={defaultOpen}>
            Mode: <ScalerInput value={mode} setValue={setMode} />
            <div className="graph-card">
                <div className='left'>
                    {mode === 0 && <ConceptPresetInput keyCenter={origin} setKeyCenter={setOrigin} intervals={vectors} setIntervals={setVectors} />}
                    {mode === 2 && <ConceptMathInput keyCenter={origin} setKeyCenter={setOrigin} intervals={vectors} setIntervals={setVectors} />}
                </div>
                <div className='right'>
                    <Graph origin={origin} vectors={vectors} x='d' y='p' max={max} title="d vs p" yLabel="p" xLabel="d" />
                </div>
            </div>
        </Card>
    )
}

export default GraphCard;
import React, { useState } from 'react';
import PW from 'play-what';

import Graph from './Graph';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import VectorsInput from '../../UI/VectorsInput/VectorsInput';

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

const GraphCard = () => {
    const [max, setMax] = useState(MAX_VECTOR);
    const [origin, setOrigin] = useState(ORIGIN);
    const [vectors, setVectors] = useState(VECTORS);
    const [mathMode, setMathMode] = useState(false);

    return (
        <Card title="Graph" defaultOpen>
            <div className="mode-button" onClick={() => setMathMode(!mathMode)}>Toggle Mode</div>
            <div className="graph-card">
                <div className='left'>
                    {!mathMode && <ConceptInput keyCenter={origin} setKeyCenter={setOrigin} intervals={vectors} setIntervals={setVectors} max={max} />}
                    {mathMode && <VectorsInput keyCenter={origin} setKeyCenter={setOrigin} intervals={vectors} setIntervals={setVectors} max={max} />}
                </div>
                <div className='right'>
                    <Graph origin={origin} vectors={vectors} x='d' y='p' max={max} title="d vs p" yLabel="p" xLabel="d" />
                </div>
            </div>
        </Card>
    )
}

export default GraphCard;
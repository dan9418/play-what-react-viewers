import React, { useState } from 'react';
import PW from 'play-what';
import './Graph.css';
import Card from '../../UI/Card/Card';
import Graph from './Graph';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const GraphCard = ({ defaultOpen, back }) => {
    return (
        <Card title="Graph" defaultOpen={defaultOpen} back={back}>
            <div className="graph-card">
                <div className='left'>
                    <ConceptInput />
                </div>
                <div className='right'>
                    <Graph origin={origin} vectors={vectors} x='d' y='p' max={max} title="d vs p" yLabel="p" xLabel="d" />
                </div>
            </div>
        </Card>
    )
}

export default GraphCard;
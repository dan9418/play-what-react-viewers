import React, { useState } from 'react';
import PW from 'play-what';
import './Chart.css';
import Card from '../../UI/Card/Card';
import Chart from './Chart';
import PlaybackControls from '../PlaybackControls/PlaybackControls';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import useNoteContext from '../../Utils/NoteContext';

const ChartCard = ({ defaultOpen, back }) => {

    return (
        <Card title="Concept Chart" defaultOpen={defaultOpen} back={back}>
            <div className="chart-card">
                <PlaybackControls />
                <Chart />

                <ConceptInput />
            </div>
        </Card>
    )
}

export default ChartCard;
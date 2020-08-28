import React from 'react';
import './Concept.css';
import { IntervalList, KeyCenter, NoteList } from './ConceptHelpers';

const Concept = ({ name, keyCenter, intervals, notes, colorFn }) => {
    return (
        <>
            <h3>{name}</h3>
            <div className='card'>
                <h4>Key Center</h4>
                <div className='subcard'>
                    <KeyCenter pod={keyCenter} colorFn={colorFn} ctx={{ pod: keyCenter }} />
                </div>

                <h4>Intervals</h4>
                <div className='subcard'>
                   <IntervalList intervals={intervals} colorFn={colorFn} />
                </div>

                <h4>Notes</h4>
                <div className='subcard'>
                   <NoteList notes={notes} colorFn={colorFn} keyCenter={keyCenter} />
                </div>
            </div>
        </>
    );
}

export default Concept;
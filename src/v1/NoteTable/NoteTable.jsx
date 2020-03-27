import * as React from 'react';
import './NoteTable.css';

export default function NoteTable(props) {
    return (
        <div className='note-table'>
            {getTable(props.concept.getNotes(props.keyCenter))}
        </div>
    )
}

function getTable(notes) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Interval</th>
                    <th>Note Index</th>
                    <th>Pitch Class</th>
                    <th>Octave</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                {notes.map(note => <tr key={note.noteIndex}>
                    <td>{note.name}</td>
                    <td>{note.interval.id}</td>
                    <td>{note.noteIndex}</td>
                    <td>{note.pitchClass}</td>
                    <td>{note.octave}</td>
                    <td>{Math.round(note.frequency) + ' Hz'}</td>
                </tr>)}
            </tbody>
        </table>
    );
}
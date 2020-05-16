import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { keyCenter, intervals, noteIndex, minIndex, maxIndex } = props;

    const i = PW.Theory.findNoteIndex(keyCenter, intervals, noteIndex, true);
    // const note = PW.Theory.findNoteWithPitch(intervals, noteIndex, true);
    // const minNote = Theory.getNoteByNoteIndex(fretMapping.notes, minIndex);
    // const maxNote = Theory.getNoteByNoteIndex(fretMapping.notes, maxIndex);

    const styles = PW.Color.degree(intervals[i]);
    const label = PW.Label.degree(intervals[i]);

    return (
        <div className='fret-label' style={styles} onClick={() => null}>
            {label}
        </div>
    );
}

export default FretLabel;
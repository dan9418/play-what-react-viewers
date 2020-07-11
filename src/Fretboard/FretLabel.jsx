import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { concept, noteIndex, minIndex, maxIndex } = props;

    const { a: keyCenter, B: intervals } = concept;
    const notes = PW.Theory.addVectorsBatch(keyCenter, intervals);

    const i = PW.Theory.findIndexOfNoteWithPitch(notes, noteIndex, true);

    const f = PW.Theory.getFrequency(noteIndex);
    const play = () => PW.Sound.playNote(f);

    const styles = PW.Color.degree(intervals[i]);
    const label = PW.Label.degree(intervals[i]);

    return (
        <div className='fret-label' style={styles} onClick={play}>
            {label}
        </div>
    );
}

export default FretLabel;
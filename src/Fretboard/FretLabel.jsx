import * as React from "react";
import "./Fretboard.css";

const FretLabel = props => {
    const { concept, noteIndex, minIndex, maxIndex } = props;
    return null;

    return (
        <div className='fret-label' style={styles} onClick={play}>
            {label}
        </div>
    );
}

export default FretLabel;
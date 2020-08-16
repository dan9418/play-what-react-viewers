import * as React from "react";
import "./Fretboard.css";

const FretLabel = ({ config }) => {
    const { label, ...props } = config;

    return (
        <div className='fret-label' {...config}>
            {label}
        </div>
    );
}

export default FretLabel;
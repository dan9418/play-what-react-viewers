import * as React from "react";
import "./Fretboard.css";

const FretLabel = ({ config }) => {
    const { children, ...props } = config;

    return (
        <div className='fret-label' {...config}>
            {children}
        </div>
    );
}

export default FretLabel;
import * as React from "react";
import PW from 'play-what';
import Fretboard from "./Fretboard"

export const fromConfig = (fretboardConfig, noteConfig) => {

    const notes = PW.v2.parse(noteConfig);

    return (
        <Fretboard
            fretLow={0}
            fretHigh={12}
            strings={[
                { tuning: 16 },   // e
                { tuning: 11 },   // B
                { tuning: 7 },    // G
                { tuning: 2 },    // D
                { tuning: -3 },   // A
                { tuning: -8 }    // E
            ]}
            showFretNumbers={true}
            showDots={true}
            notes={notes}
        />
    );
}
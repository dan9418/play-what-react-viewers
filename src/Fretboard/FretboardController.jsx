import React, { useState} from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import Fretboard from './Fretboard';
import DEFAULT_PROPS from "./Fretboard.defaults";
import PlayWhat from 'play-what';

export default function FretboardController(props) {

    const [keyCenter, setKeyCenter] = useState(0);
    const [conceptData, setConceptData] = useState(0);
    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState([]);
    const [colorStrategy, setColorStrategy] = useState(0);
    const [labelStrategy, setLabelStrategy] = useState(0);
    const [mapStrategy, setMapStrategy] = useState(0);
    
    return (
        <div className='fretboard-controller'>
            <Fretboard/>
        </div>
    );
}
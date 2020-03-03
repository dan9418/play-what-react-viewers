import React, { useState } from "react";
import "./Fretboard.css";
import PlayWhat from 'play-what';

import Fretboard from './Fretboard';
import DEFAULT_PROPS from "./Fretboard.defaults";
import Panels from './Panels/_module';

// Constants

const THEORY_PANELS = [
    {
        id: 'keyCenter',
        name: 'KeyCenter',
        component: Panels.KeyCenter
    },
    {
        id: 'concept',
        name: 'Concept',
        component: Panels.KeyCenter
    },
    {
        id: 'filters',
        name: 'Filters',
        component: Panels.KeyCenter
    }
];

const FRETBOARD_PANELS = [
    {
        id: 'range',
        name: 'Range',
        component: Panels.Range
    },
    {
        id: 'tuning',
        name: 'Tuning',
        component: Panels.Tuning
    },
    {
        id: 'label',
        name: 'Labels',
        component: Panels.Label
    }
];

const PANEL_TYPES = [
    {
        id: 'theory',
        name: 'Theory',
        panels: THEORY_PANELS
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        panels: FRETBOARD_PANELS
    }
];

const getPreviewText = (keyCenter, concept) => `${keyCenter.tonic.name}${keyCenter.accidental.name} ${keyCenter.octave} ${concept.id}`;

// Panel 

const Panel = props => {
    const [open, setOpen] = useState(false);
    return (
        <div className='panel' style={{ paddingLeft: `${props.level * 5}px` }}>
            <div className={`panel-name`} onClick={() => setOpen(!open)} style={{ fontWeight: props.level > 0 ? 'normal' : 'bold' }}>
                {props.name}
            </div>
            <div className={`panel-content`}>
                {open && props.children}
            </div>
        </div>
    )
}

// Controller

const FretboardController = props => {

    const [configOpen, setConfigOpen] = useState(false);

    // Fretboard
    const [fretLow, setFretLow] = useState(props.fretLow || 0);
    const [fretHigh, setFretHigh] = useState(props.fretHigh || 12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(DEFAULT_PROPS.strings);

    // Theory
    const [keyCenter, setKeyCenter] = useState(
        props.keyCenter ||
        new PlayWhat.KeyCenter(
            PlayWhat.Constants.TONIC.C,
            PlayWhat.Constants.ACCIDENTAL.Natural,
            4
        )
    );
    const [concept, setConcept] = useState(
        props.concept ||
        PlayWhat.Presets.MODE.Ionian
    );
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(() => PlayWhat.LabelUtils.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.pitchClass);
    const [actionStrategy, setActionStrategy] = useState(PlayWhat.ActionBy.playSound);

    const state = {
        fretLow, setFretLow,
        fretHigh, setFretHigh,
        showDots, setShowDots,
        showFretNumbers, setShowFretNumbers,
        strings, setStrings,
        keyCenter, setKeyCenter,
        concept, setConcept,
        mapStrategy, setMapStrategy,
        labelStrategy, setLabelStrategy,
        colorStrategy, setColorStrategy,
        actionStrategy, setActionStrategy
    };

    const labelProps = {
        keyCenter,
        concept,
        mapStrategy,
        labelStrategy,
        colorStrategy,
        actionStrategy
    };

    return (
        <div className={`fretboard-controller no-select ${configOpen ? 'edit' : ''}`}>

            <div className='fretboard-container'>
                <Fretboard
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
                    strings={strings}
                    labelProps={labelProps}
                />
            </div>

            <div className='input-container'>

                <div className={`preview ${configOpen ? 'active' : ''}`} onClick={() => setConfigOpen(!configOpen)}>
                    {getPreviewText(keyCenter, concept)}
                </div>

                {configOpen &&
                    <div className='input-modal'>
                        <div className='panel-name-container'>
                            {PANEL_TYPES.map(type => (
                                <Panel key={type.id} name={type.name} level={0}>
                                    {type.panels.map(P => (
                                        <Panel key={P.id} name={P.name} level={1}>
                                            <P.component {...state} />
                                        </Panel>
                                    ))}
                                </Panel>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div >
    );
}

export default FretboardController;
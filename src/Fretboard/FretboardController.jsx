import React, { useState } from "react";
import "./Fretboard.css";
import PlayWhat from 'play-what';
import DEFAULT_PROPS from "./Fretboard.defaults";

import Fretboard from './Fretboard';
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
            <div className={`panel-name`} onClick={() => setOpen(!open)} style={props.level > 0 ? {} : {color: '#DDD', background: '#5E99D1'}}>
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

    // Set initial state from (1) props and (2) defaults
    const [fretLow, setFretLow] = useState(props.fretLow || DEFAULT_PROPS.fretLow);
    const [fretHigh, setFretHigh] = useState(props.fretHigh || DEFAULT_PROPS.fretHigh);
    const [showDots, setShowDots] = useState(props.showDots || DEFAULT_PROPS.showDots);
    const [showFretNumbers, setShowFretNumbers] = useState(props.showFretNumbers || DEFAULT_PROPS.showFretNumbers);
    const [strings, setStrings] = useState(props.strings || DEFAULT_PROPS.strings);
    // Label props
    const [keyCenter, setKeyCenter] = useState(props.keyCenter || DEFAULT_PROPS.labelProps.keyCenter);
    const [concept, setConcept] = useState(props.concept || DEFAULT_PROPS.labelProps.concept);
    const [colorStrategy, setColorStrategy] = useState(props.colorStrategy ? PlayWhat.ColorBy[props.colorStrategy] : DEFAULT_PROPS.labelProps.colorStrategy);
    const [labelStrategy, setLabelStrategy] = useState(props.labelStrategy ? PlayWhat.LabelUtils[props.labelStrategy] : DEFAULT_PROPS.labelProps.labelStrategy);
    const [mapStrategy, setMapStrategy] = useState(props.mapStrategy ? PlayWhat.MapBy[props.mapStrategy] : DEFAULT_PROPS.labelProps.mapStrategy);
    const [actionStrategy, setActionStrategy] = useState(props.actionStrategy ? PlayWhat.ActionBy[props.actionStrategy] : DEFAULT_PROPS.labelProps.actionStrategy);

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
        actionStrategy,
        rootString: props.rootString
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
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
        component: Panels.Range
    },
    {
        id: 'concept',
        name: 'Concept',
        component: Panels.Range
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

// Controller

const FretboardController = () => {

    const [configOpen, setConfigOpen] = useState(false);
    const [activePanelType, setActivePanelType] = useState(PANEL_TYPES[0]);
    const [activePanel, setActivePanel] = useState(activePanelType.panels[0]);

    // Fretboard
    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);
    const [strings, setStrings] = useState(DEFAULT_PROPS.strings);

    // Theory
    const [keyCenter, setKeyCenter] = useState(new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4));
    const [conceptData, setConceptData] = useState(PlayWhat.Presets.MODE.Ionian);
    const [colorStrategy, setColorStrategy] = useState(PlayWhat.ColorBy.degree);
    const [labelStrategy, setLabelStrategy] = useState(PlayWhat.LabelUtils.interval);
    const [mapStrategy, setMapStrategy] = useState(PlayWhat.MapBy.pitchClass);

    const ActivePanel = activePanel.component;
    const state = {
        fretLow, setFretLow,
        fretHigh, setFretHigh,
        showDots, setShowDots,
        showFretNumbers, setShowFretNumbers,
        strings, setStrings
    };

    return (
        <div className='fretboard-controller no-select'>

            <div className='controller-title'>Fretboard</div>

            <div className='fretboard-container'>
                <Fretboard
                    fretLow={fretLow}
                    fretHigh={fretHigh}
                    showDots={showDots}
                    showFretNumbers={showFretNumbers}
                    strings={strings}

                    keyCenter={keyCenter}
                    concept={conceptData.value}
                    colorStrategy={colorStrategy}
                    labelStrategy={labelStrategy}
                    mapStrategy={mapStrategy}
                />
            </div>

            <div className='input-container'>

                <div className={`card preview ${configOpen ? 'active' : ''}`} onClick={() => setConfigOpen(!configOpen)}>
                    edit
                </div>


                {configOpen &&
                    <>
                        <div className='input-box'>
                            <div className='panel-name-container'>
                                {PANEL_TYPES.map(type => (
                                    <div key={type.id} className={`panel-name ${type.id === activePanelType.id ? 'active' : ''}`} onClick={() => { setActivePanelType(type); setActivePanel(type.panels[0]); } }>
                                        {type.name}
                                    </div>
                                ))}
                            </div>
                            <div className='panel-name-container'>
                                {activePanelType.panels.map(panel => (
                                    <div key={panel.id} className={`panel-name ${panel.id === activePanel.id ? 'active' : ''}`} onClick={() => setActivePanel(panel)}>
                                        {panel.name}
                                    </div>
                                ))}
                            </div>
                            <ActivePanel {...state} />
                        </div>
                    </>
                }


            </div>
        </div >
    );
}

export default FretboardController;
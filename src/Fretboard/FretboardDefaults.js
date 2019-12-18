import { Theory, Strategies, Utils } from 'play-what';

import {
    FretboardColorStrategies,
    FretboardLabelStrategies,
    FretboardFilterStrategies
} from './FretboardStrategies';

let MappingStrategies = Strategies.Mapping;
let ActionStrategies = Strategies.Action;
let ColorStrategies = Strategies.Color;
let LabelStrategies = Strategies.Label;

export const DEFAULT_FRETBOARD_PROPS = {
    // form
    fretLow: 0,
    fretHigh: 12,
    strings: [
        { tuning: 16 },   // e
        { tuning: 11 },   // B
        { tuning: 7 },    // G
        { tuning: 2 },    // D
        { tuning: -3 },   // A
        { tuning: -8 }    // E
    ],
    showFretNumbers: true,
    showDots: true,
    // theory
    keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
    concept: Theory.Presets.CHORD.Maj7,
    // notes
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    noteFilter: () => true,
    // labels
    labelStrategy: FretboardLabelStrategies.interval,
    labelFilter: () => true,
    // colors
    colorStrategy: FretboardColorStrategies.degree,
    colorFilter: () => true,
    // actions
    actionStrategy: ActionStrategies.sound,
    actionFilter: () => true
}

export const DEFAULT_FRETBOARD_INPUTS = [
    /*
    {
        id: 'keyCenter',
        name: 'Key Center',
        component: KeyCenterInput
    },
    {
        id: 'concept',
        name: 'Concept',
        component: ConceptInput
    },
    {
        id: 'mappingStrategy',
        name: 'Mapping Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: MappingStrategies.getNoteByNoteIndex
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: MappingStrategies.getNoteByPitchClass
                }
            ]
        }
    },
    {
        id: 'colorStrategy',
        name: 'Color Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'none',
                    name: 'None',
                    fx: ColorStrategies.none
                },
                {
                    id: 'binary',
                    name: 'Binary',
                    fx: ColorStrategies.binary
                },
                {
                    id: 'degree',
                    name: 'Degree',
                    fx: ColorStrategies.degree
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: ColorStrategies.pitchClass
                },
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: ColorStrategies.noteIndex
                },
                {
                    id: 'octave',
                    name: 'Octave',
                    fx: ColorStrategies.octave
                },
                {
                    id: 'frequency',
                    name: 'Frequency',
                    fx: ColorStrategies.frequency
                }
            ]
        }
    },
    {
        id: 'labelStrategy',
        name: 'Label Strategy',
        component: StrategyInput,
        props: {
            data: [
                {
                    id: 'none',
                    name: 'None',
                    fx: LabelStrategies.none
                },
                {
                    id: 'degree',
                    name: 'Degree',
                    fx: LabelStrategies.degree
                },
                {
                    id: 'interval',
                    name: 'Interval',
                    fx: LabelStrategies.interval
                },
                {
                    id: 'pitchClass',
                    name: 'Pitch Class',
                    fx: LabelStrategies.pitchClass
                },
                {
                    id: 'noteIndex',
                    name: 'Note Index',
                    fx: LabelStrategies.noteIndex
                },
                {
                    id: 'octave',
                    name: 'Octave',
                    fx: LabelStrategies.octave
                },
                {
                    id: 'frequency',
                    name: 'Frequency',
                    fx: LabelStrategies.frequency
                }
            ]
        }
    }*/
];
import { Theory, Strategies, Utils } from 'play-what';

import {
    KeyboardColorStrategies,
    KeyboardLabelStrategies
} from './KeyboardStrategies';

let MappingStrategies = Strategies.Mapping;
let ActionStrategies = Strategies.Action;
let ColorStrategies = Strategies.Color;
let LabelStrategies = Strategies.Label;

export const DEFAULT_KEYBOARD_PROPS = {
    keyLow: 0,
    keyHigh: 24,
    // theory
    keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
    concept: Theory.Presets.CHORD.Maj7,
    // notes
    mappingStrategy: MappingStrategies.getNoteByNoteIndex,
    noteFilter: () => true,
    // labels
    labelStrategy: KeyboardLabelStrategies.interval,
    labelFilter: () => true,
    // colors
    colorStrategy: KeyboardColorStrategies.degree,
    colorFilter: () => true,
    // actions
    actionStrategy: ActionStrategies.sound,
    actionFilter: () => true
}

export const DEFAULT_KEYBOARD_INPUTS = [];
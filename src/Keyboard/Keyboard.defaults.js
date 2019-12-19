import { Theory, Strategies, Utils } from 'play-what';
import { ColorBy, LabelBy } from './Keyboard.strategies';

export default {
    keyLow: 0,
    keyHigh: 24,
    // theory
    keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
    concept: Theory.Presets.CHORD.Maj7,
    // notes
    mappingStrategy: Strategies.MapBy.noteIndex,
    noteFilter: () => true,
    // labels
    labelStrategy: LabelBy.interval,
    labelFilter: () => true,
    // colors
    colorStrategy: ColorBy.degree,
    colorFilter: () => true,
    // actions
    actionStrategy: Strategies.ActionBy.playSound,
    actionFilter: () => true
}
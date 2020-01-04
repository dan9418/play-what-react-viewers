import PlayWhat from 'play-what';
import { ColorBy, LabelBy } from './Keyboard.strategies';

export default {
    keyLow: 0,
    keyHigh: 24,
    // theory
    keyCenter: new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4),
    concept: PlayWhat.Presets.CHORD.Maj7,
    // notes
    mapStrategy: PlayWhat.MapBy.noteIndex,
    noteFilter: () => true,
    // labels
    labelStrategy: LabelBy.interval,
    labelFilter: () => true,
    // colors
    colorStrategy: ColorBy.degree,
    colorFilter: () => true,
    // actions
    actionStrategy: PlayWhat.ActionBy.playSound,
    actionFilter: () => true
}
import PlayWhat from 'play-what';
import { ColorBy, LabelBy, FilterBy } from './Fretboard.strategies';

export default {
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
    keyCenter: new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4),
    concept: PlayWhat.Presets.SCALE.Major,
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
};
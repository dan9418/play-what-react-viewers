import PlayWhat from 'play-what';
import { ColorBy, LabelBy } from './Keyboard.strategies';

export default {
    keyCenter: new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4),
    concept: PlayWhat.Presets.SCALE.Major,
    mapStrategy: PlayWhat.MapBy.noteIndex,
    labelStrategy: LabelBy.interval,
    colorStrategy: ColorBy.degree,
    actionStrategy: PlayWhat.ActionBy.playSound,
};
import PlayWhat from 'play-what';

export default {
    keyCenter: new PlayWhat.KeyCenter(PlayWhat.Constants.TONIC.C, PlayWhat.Constants.ACCIDENTAL.Natural, 4),
    concept: PlayWhat.Presets.SCALE.Major,
    mapStrategy: PlayWhat.MapBy.noteIndex,
    labelStrategy: PlayWhat.LabelUtils.interval,
    colorStrategy: PlayWhat.ColorBy.degree,
    actionStrategy: PlayWhat.ActionBy.playSound,
};
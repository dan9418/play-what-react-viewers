import { Theory, Strategies, Utils } from 'play-what';

/* Color */

const DEFAULT_ROMAN_NUMERAL_COLOR_SCHEMES = {
    quality: [
        Utils.COLORS.Red,
        Utils.COLORS.Orange,
        Utils.COLORS.Yellow,
        Utils.COLORS.Blue
    ]
};

export class ColorBy extends Strategies.ColorBy {
    static quality(note, viewerData, scheme = DEFAULT_ROMAN_NUMERAL_COLOR_SCHEMES.quality) {
        return ColorUtils.continuous(note.noteIndex - viewerData.keyLow, viewerData.minNote.noteIndex - viewerData.keyLow, viewerData.maxNote.noteIndex - viewerData.keyLow, scheme);
    }
}
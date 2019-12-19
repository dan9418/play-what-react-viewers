import { Theory, Strategies, Utils } from 'play-what';

/* Color */

const DEFAULT_FRETBOARD_COLOR_SCHEMES = {
    stringNumber: [
        Utils.COLORS.White,
        Utils.COLORS.Black
    ],
    fretNumber: [
        Utils.COLORS.White,
        Utils.COLORS.Black
    ]
};

export class ColorBy extends Strategies.ColorBy {
    static stringNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.stringNumber) {
        return ColorUtils.continuous(viewerData.stringData.number, 1, viewerData.numStrings, scheme);
    }
    static fretNumber(note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.fretNumber) {
        return ColorUtils.continuous(viewerData.fretData.number, viewerData.fretLow, viewerData.fretHigh, scheme);
    }
}

/* Label */

export class LabelBy extends Strategies.LabelBy {
    static stringNumber(note, viewerData) {
        return viewerData.stringData.number;
    }
    static fretNumber(note, viewerData) {
        return viewerData.fretData.number;
    }
}

/* Filter */

export class FilterBy extends Strategies.FilterBy {
    static voicing(note, viewerData, voicing = []) {
        // TODO
    }
}
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

const ColorBy = Object.assign({}, Strategies.ColorBy, {
    stringNumber: {
        id: 'stringNumber',
        name: 'String Number',
        fx: (note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.stringNumber) => {
            return Utils.Color.continuous(viewerData.stringData.number, 1, viewerData.numStrings, scheme);
        }
    },
    fretNumber: {
        id: 'fretNumber',
        name: 'Fret Number',
        fx: (note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.fretNumber) => {
            return Utils.Color.continuous(viewerData.fretData.number, viewerData.fretLow, viewerData.fretHigh, scheme);
        }
    }
});
export { ColorBy };

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

const VOICING = {
    barreMaj_E: ['P1', 'P5', 'M3', 'P1', 'P5', 'P1'],
    barreMin_E: ['P1', 'P5', 'm3', 'P1', 'P5', 'P1'],
    barreMaj_A: ['P5', 'M3', 'P1', 'P5', 'P1', null],
    barreMin_A: ['P5', 'm3', 'P1', 'P5', 'P1', null]
}

export class FilterBy extends Strategies.FilterBy {
    static voicing(note, viewerData, voicing = VOICING.barreMaj_E) {
        if (!note || !note.interval) return false;
        return note.interval.id === voicing[viewerData.stringData.number - 1]
    }
}
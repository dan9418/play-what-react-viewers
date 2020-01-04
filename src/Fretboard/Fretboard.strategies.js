import PlayWhat from 'play-what';

/* Color */

const DEFAULT_FRETBOARD_COLOR_SCHEMES = {
    stringNumber: [
        PlayWhat.COLORS.White,
        PlayWhat.COLORS.Black
    ],
    fretNumber: [
        PlayWhat.COLORS.White,
        PlayWhat.COLORS.Black
    ],
    caged: [
        null,
        PlayWhat.COLORS.Red,
        PlayWhat.COLORS.Orange,
        PlayWhat.COLORS.Yellow,
        PlayWhat.COLORS.Green,
        PlayWhat.COLORS.Black
    ],
};

export const ColorBy = Object.assign({}, PlayWhat.ColorBy, {
    stringNumber: {
        id: 'stringNumber',
        name: 'String Number',
        fx: (note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.stringNumber) => {
            return PlayWhat.Color.continuous(viewerData.stringData.number, 1, viewerData.numStrings, scheme);
        }
    },
    fretNumber: {
        id: 'fretNumber',
        name: 'Fret Number',
        fx: (note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.fretNumber) => {
            return PlayWhat.Color.continuous(viewerData.fretData.number, viewerData.fretLow, viewerData.fretHigh, scheme);
        }
    },
    caged: {
        id: 'caged',
        name: 'CAGED',
        fx: (note, viewerData, scheme = DEFAULT_FRETBOARD_COLOR_SCHEMES.caged) => {
            if (!note || !note.interval) return PlayWhat.Color.discrete(0, scheme);
            else if (note.interval.degree === 1) return PlayWhat.Color.discrete(1, scheme);
            else if (note.interval.degree === 3) return PlayWhat.Color.discrete(1, scheme);
            else if (note.interval.degree === 5) return PlayWhat.Color.discrete(1, scheme);
            else if (note.interval.degree === 7) return PlayWhat.Color.discrete(5, scheme);
            else return PlayWhat.Color.discrete(5, scheme);
        }
    }
});

/* Label */

export const LabelBy = Object.assign({}, PlayWhat.LabelBy, {
    stringNumber: {
        id: 'stringNumber',
        name: 'String Number',
        fx: (note, viewerData) => {
            return viewerData.stringData.number;
        }
    },

    fretNumber: {
        id: 'fretNumber',
        name: 'Fret Number',
        fx: (note, viewerData) => {
            return viewerData.fretData.number;
        }
    }
});

/* Filter */

const VOICING = {
    barreMaj_E: ['P1', 'P5', 'M3', 'P1', 'P5', 'P1'],
    barreMin_E: ['P1', 'P5', 'm3', 'P1', 'P5', 'P1'],
    barreMaj_A: ['P5', 'M3', 'P1', 'P5', 'P1', null],
    barreMin_A: ['P5', 'm3', 'P1', 'P5', 'P1', null]
}

export const FilterBy = Object.assign({}, PlayWhat.FilterBy, {
    voicing: {
        id: 'stringNumber',
        name: 'String Number',
        fx: (note, viewerData, voicing = VOICING.barreMaj_E) => {
            if (!note || !note.interval) return false;
            return note.interval.id === voicing[viewerData.stringData.number - 1]
        }
    }
});
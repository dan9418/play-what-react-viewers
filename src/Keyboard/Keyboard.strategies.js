import { Theory, Strategies, Utils } from 'play-what';

/* Color */

const DEFAULT_KEYBOARD_COLOR_SCHEMES = {
    keyNumber: [
        Utils.COLORS.White,
        Utils.COLORS.Black
    ],
    keyType: [
        Utils.COLORS.Green,
        Utils.COLORS.Red
    ]
};

export const ColorBy = Object.assign({}, Strategies.ColorBy, {
    keyNumber: {
        id: 'keyNumber',
        name: 'Key Number',
        fx: (note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyNumber) => {
            return ColorUtils.continuous(note.noteIndex - viewerData.keyLow, viewerData.minNote.noteIndex - viewerData.keyLow, viewerData.maxNote.noteIndex - viewerData.keyLow, scheme);
        }
    },
    keyType: {
        id: 'keyType',
        name: 'Key Type',
        fx: (note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyType) => {
            return ColorUtils.discrete(viewerData.keyData.type === KeyboardKeyType.White ? 0 : 1, scheme);
        }
    }
});

/* Label */

export const LabelBy = Object.assign({}, Strategies.LabelBy, {
    keyNumber: {
        id: 'keyNumber',
        name: 'Key Number',
        fx: (note, viewerData) => {
            return note.noteIndex - viewerData.keyLow;
        }
    },
    keyType: {
        id: 'keyType',
        name: 'Key Type',
        fx: (note, viewerData) => {
            return viewerData.keyData.type === KeyboardKeyType.White ? 'W' : 'B';
        }
    }
});
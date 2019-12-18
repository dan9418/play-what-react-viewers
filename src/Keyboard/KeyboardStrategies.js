import { Theory, Strategies, Utils } from 'play-what';

export const DEFAULT_KEYBOARD_COLOR_SCHEMES = {
    keyNumber: [
        Utils.COLORS.White,
        Utils.COLORS.Black
    ],
    keyType: [
        Utils.COLORS.Green,
        Utils.COLORS.Red
    ]
};

export class KeyboardColorStrategies extends Strategies.Color {
    static keyNumber(note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyNumber) {
        return ColorUtils.continuous(note.noteIndex - viewerData.keyLow, viewerData.minNote.noteIndex - viewerData.keyLow, viewerData.maxNote.noteIndex - viewerData.keyLow, scheme);
    }
    static keyType(note, viewerData, scheme = DEFAULT_KEYBOARD_COLOR_SCHEMES.keyType) {
        return ColorUtils.discrete(viewerData.keyData.type === KeyboardKeyType.White ? 0 : 1, scheme);
    }
}

export class KeyboardLabelStrategies extends Strategies.Label {
    static keyNumber(note, viewerData) {
        return note.noteIndex - viewerData.keyLow;
    }
    static keyType(note, viewerData) {
        return viewerData.keyData.type === KeyboardKeyType.White ? 'W' : 'B';
    }
}
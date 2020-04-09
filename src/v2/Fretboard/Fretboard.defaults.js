import FretLabel from './FretLabel';
import LABEL_DEFAULTS from './FretLabel.defaults';

export default {
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
    labelComponent: FretLabel,
    labelProps: LABEL_DEFAULTS
};
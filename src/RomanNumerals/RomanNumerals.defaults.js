import { Theory, Strategies, Utils } from 'play-what';
import { ColorBy, LabelBy } from './RomanNumerals.strategies';

export default {
    keyCenter: new Theory.KeyCenter(Theory.Constants.TONIC.C, Theory.Constants.ACCIDENTAL.Natural, 4),
    concept: Theory.Presets.SCALE.NatualMinor,
    colorStrategy: ColorBy.degree,
    actionStrategy: Strategies.ActionBy.none,
}
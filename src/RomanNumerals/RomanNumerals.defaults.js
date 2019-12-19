import { Theory, Strategies, Utils } from 'play-what';
import { ColorBy, LabelBy } from './RomanNumerals.strategies';

export default {
    concept: Theory.Presets.SCALE.Major,
    colorStrategy: ColorBy.degree,
    actionStrategy: Strategies.ActionBy.none,
}
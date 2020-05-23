import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import HarmonicSeries from './HarmonicSeries';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';

const HarmonicSeriesCard = ({ defaultOpen }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(16);

    return (
        <Card title="HarmonicSeries" defaultOpen={defaultOpen}>
            <HarmonicSeries fundamental={fundamental} n={n} />

            <InputBlock title="Configuration">
                <LabeledInput label="Fundamental">
                    <ScalarInput value={fundamental} setValue={setFundamental} />
                </LabeledInput>
                <LabeledInput label="n">
                    <ScalarInput value={n} setValue={setN} />
                </LabeledInput>
            </InputBlock>
        </Card>
    )
}

export default HarmonicSeriesCard;
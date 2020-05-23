import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import TrueScale from './TrueScale';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';

const TrueScaleCard = ({ defaultOpen, back }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(32);

    return (
        <Card title="TrueScale" defaultOpen={defaultOpen} back={back}>
            <TrueScale fundamental={fundamental} n={n} />

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

export default TrueScaleCard;
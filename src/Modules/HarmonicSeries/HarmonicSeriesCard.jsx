import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import HarmonicSeries from './HarmonicSeries';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';

const HarmonicSeriesCard = ({ defaultOpen }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(16);

    return (
        <Card title="HarmonicSeries" defaultOpen={defaultOpen}>
            <HarmonicSeries fundamental={fundamental} n={n} />

            <label>Fundamental:</label>
            <ScalarInput value={fundamental} setValue={setFundamental} />
            <label>n:</label>
            <ScalarInput value={n} setValue={setN} />
        </Card>
    )
}

export default HarmonicSeriesCard;
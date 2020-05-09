import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import HarmonicSeries from './HarmonicSeries';

const HarmonicSeriesCard = ({ defaultOpen }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(16);

    return (
        <Card title="HarmonicSeries" defaultOpen={defaultOpen}>
            <HarmonicSeries fundamental={fundamental} n={n} />
        </Card>
    )
}

export default HarmonicSeriesCard;
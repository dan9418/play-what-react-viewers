import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import TrueScale from './TrueScale';

const TrueScaleCard = ({ defaultOpen }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(32);

    return (
        <Card title="TrueScale" defaultOpen={defaultOpen}>
            <TrueScale fundamental={fundamental} n={n} />
        </Card>
    )
}

export default TrueScaleCard;
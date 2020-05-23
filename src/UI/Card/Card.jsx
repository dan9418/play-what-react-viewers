import React, { useState } from 'react';
import './Card.css';
import ButtonInput from '../ButtonInput/ButtonInput';

const Card = ({ title, children, defaultOpen, back }) => {
    const [open, setOpen] = useState(defaultOpen || true);

    return (
        <div className={`card ${open ? 'open' : ''}`}>
            <div className="title pw-secondary">
                {title}
                <ButtonInput className=" pw-secondary pw-hov" onClick={back}>Back</ButtonInput>
            </div>
            {open && <div className="content ">{children}</div>}
        </div>
    )
}

export default Card;
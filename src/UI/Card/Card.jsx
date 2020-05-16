import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || true);

    return (
        <div className={`card ${open ? 'open' : ''}`}>
            <h2 className="title" onClick={() => setOpen(!open)}>{title}</h2>
            {open && <div className="content ">{children}</div>}
        </div>
    )
}

export default Card;
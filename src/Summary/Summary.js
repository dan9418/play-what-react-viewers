import * as React from "react";
//import "./Keyboard.css";

const Summary = ({ style, notes, ...props }) => {

    const rowStyles = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    };

    console.log(rowStyles)

    return (
        <div className='summary' style={rowStyles}>
            {notes.map(n => <pre>{JSON.stringify(n, null, 2)}</pre>)}
        </div>
    );
}

export default Summary;
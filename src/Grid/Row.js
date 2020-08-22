import * as React from "react";
//import "./Keyboard.css";

const Row = ({ style, children, n, ...props }) => {

    const rowStyles = {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr '.repeat(n)
    };

    console.log(rowStyles)

    return (
        <div className='row' style={rowStyles}>
            {children}
        </div>
    );
}

export default Row;
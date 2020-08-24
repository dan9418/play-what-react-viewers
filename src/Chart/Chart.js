import * as React from "react";
//import "./Keyboard.css";

const Chart = ({ children, ...props }) => {

    const rowStyles = {
        width: '100%'
    };

    return (
        <div className='chart' style={rowStyles}>
            {children}.
        </div>
    );
}

export default Chart;
import * as React from "react";
//import "./Keyboard.css";

const Label = ({ style, pod, label, ...props }) => {

    const style = {
        position: 'absolute',
        width: '90%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%'
    };

    return (
        <div className='label' style={rowStyles}>
            {notes.map(n => <pre>{JSON.stringify(n, null, 2)}</pre>)}
        </div>
    );
}

export default Label;
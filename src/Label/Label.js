import * as React from "react";
//import "./Keyboard.css";

const Label = ({ style, text, ...props }) => {

    const styles = {
        position: 'absolute',
        width: '90%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%'
    };

    return (
        <div className='label' style={styles}>
            {text}
        </div>
    );
}

export default Label;
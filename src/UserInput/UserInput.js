import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        border: '4px solid grey',
        fontWeight: 'bold'
    };

    return (
    <input  type="text"  style={userInputStyle} onChange={props.changed} value={props.currentUserName} />
    )
};

export default userInput;

import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Hi, Your lectures are amazing!</p>
        </div>
    );
};

export default userOutput;
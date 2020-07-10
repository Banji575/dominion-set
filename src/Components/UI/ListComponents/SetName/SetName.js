import React from 'react';
import './SetName.scss';
const SetName = props => {
    return(
    <h2 className='setName'>{props.children}</h2>
    )
}

export default SetName;
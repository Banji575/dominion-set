import React from 'react';
import './Input.scss';

const Imput = props => {
    return(
        <input 
        className = {props.cls.join(' ')}
        placeholder = 'Name the set, please...'
        />
    )
}

export default Imput;
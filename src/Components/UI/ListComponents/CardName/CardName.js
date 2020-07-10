import React from 'react';
import './CardName.scss';

const CardName = props => {
    return(
        <div className= 'cardName'>
            <p>-{props.children}</p>
            
            <img className='img' src={props.src} alt={props.name}/>
        </div>  
    )
}

export default CardName;
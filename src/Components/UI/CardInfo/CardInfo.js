import React from 'react';
import './CardInfo.scss';

const CardInfo = props => {
return(
    <div
    className='card-info'
    >
        <p><strong>{props.card.name}</strong></p>
        {props.card.action? <p>{props.card.action}</p>: null}
        <p>{props.card.text}</p>
        <p className='card-info__price'>{props.card.price}</p>
        <p>{props.card.type}</p>
    </div>
)
}

export default CardInfo;
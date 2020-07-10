import React from 'react';
import CardInfo from '../../UI/CardInfo/CardInfo';
import './Card.scss'
const Card = props => {
    const cls = ['Card']
    if(props.card){
        cls.push('rotate')
    }
    const Card = props.card  
                ?<React.Fragment>
                    <img src = {props.card.src} alt='Card'/>
                    <CardInfo card = {props.card}/>
                </React.Fragment>
                : <img src={props.backSide} alt='CardBackside'/>

return(
    <div className = {cls.join(' ')}>
        {Card}
    </div>
)
}

export default Card;
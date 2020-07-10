import React from 'react';
import Card from './Card/Card';
import CardList from '../CardList/CardList';
import './cardPlace.scss';

const CardPlace = props => {
    const cls = ['game-set__conteiner']
    if(props.isOpen){
        cls.push('game-set__conteiner--full')
    }

    const Cards = (
        <div className = "game-set">
                <div className = {cls.join(' ')}>  
                {props.cards  
                ? props.cards.map((el,i)=>{
                    return <Card
                    key = {i}
                    card = {el}
                    />
                })
                : [...Array(10).keys()].map((el,i)=><Card key={i} backSide={props.backSide}></Card>)
            }
                </div>
        </div>
    )

    const List = <CardList 
                    cards = {props.cards}
                    list = {props.list}
                    />
return(
    <React.Fragment>
            <div className = 'game-toolbar'>
                {/* <Imput cls = {['input']}/>
                <p>Add to collection</p> */}
            </div>
            {props.viewMode === 'cards'
            ? Cards
            : List}
    </React.Fragment>

)
}

export default CardPlace;
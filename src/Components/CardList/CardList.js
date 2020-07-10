import React from 'react';
import './cardList.scss';
import Pie from '../UI/VictoryComponent/Pie/Pie';
import Bars from '../UI/VictoryComponent/Bar/Bars';
import SetName from '../UI/ListComponents/SetName/SetName';
import CardName from '../UI/ListComponents/CardName/CardName';

const CardList = props => {
      const data = new Array(props.list.length).fill({}).map((el,i)=>{
          return {x:props.list[i][0].set, y:props.list[i].length}
      })
      const countCoins = (cards) =>{
        const data = {};
        const dataDefault = [
            { x: 1, y: 0,},
            { x: 2, y: 0, },
            { x: 3, y: 0,},
            { x: 4, y: 0, },
            { x: 5, y: 0, },
            { x: 6, y: 0, },
        ]
        
        cards.flat().forEach(el=>{
            const cost = el.price;
            if(data[cost]){
               data[cost] = parseInt(data[cost])+1
            }else{
                data[cost] = 1
            }
        })
        Object.keys(data).forEach(el=>{
            dataDefault[el-1].y = data[el]
        })
        return dataDefault;
      }
      const key = Math.random();
      console.log(props.list)
    return (
        <div className='cardList'>
            <div className = 'cardList__list'>
                    {props.list.map((el,i)=>{
                            return  ( 
                            <div
                            key={key+i}
                            className="cardList__conteiner">
                                {/* {el[i].set?<SetName>{el[i].set}</SetName>:null} */}
                                {console.log(el[0])}
                            <SetName>{el[0].set}</SetName>
                        { el.map((el,i)=>{
                            return (
                            <CardName
                            key={el.name+i}
                            src = {el.src}
                            >{el.name}</CardName>
                                )
                         })}           
                    </div>
                                    )
                     })}
            </div>
                <div className = 'cardList__bars'>
                    <div>
                        <Pie
                        data={data}/>
                    </div>
                    <div>
                        <Bars
                        data = {countCoins(props.list)}
                        />
                    </div>
                </div>
     </div>
    )
    
} 

export default CardList;
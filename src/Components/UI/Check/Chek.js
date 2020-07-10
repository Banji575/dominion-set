import React from 'react';
import './check.scss';
import IconSvg from '../icon/dominion2ed';
import Checkbox from '../../UI/Checkbox/Checkbox';
const Check = props => {
    return(
        props.boxes.map((el,i)=>{
            return(
        <div
        key={el.id}
        className = 'check'
        >
            <div className='check--conteiner'>
            {/* <label htmlFor={el.name}>{el.name}</label> */}
                <p>{el.name}</p>
                <Checkbox
                checkHandler = {props.checkHandler}
                id = 'unchecked'
                el = {el}
                checked = {el.checked}
                />
                {/* <input id={el.name} onChange={(evt)=>props.checkHandler(evt, el)} type = 'checkbox' value={el.name}/> */}
               {/*  <img className={el.checked?'checked':null} src={el.src} alt={el.name}/> */}
                <IconSvg set = {el.name} color ={el.checked ?  '#27969d' : '#a79258'}/>
                
            </div>
        </div>
            )
        })
    )
}

export default Check;
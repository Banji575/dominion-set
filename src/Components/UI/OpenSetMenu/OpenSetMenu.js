import React from 'react';
import './openSetMenu.scss';

const OpenSetMenu = props => {
  return(
    <div className='open-menu'>
        <i className='fa fa-chevron-right'
        onClick = {()=>{props.checkHandler()}}
        />
    </div>
  )  
    
}

export default OpenSetMenu;
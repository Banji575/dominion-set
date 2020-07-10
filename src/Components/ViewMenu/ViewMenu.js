import React from 'react';
import Button from '../UI/Button/Button';
import './ViewMenu.scss';

const ViewMenu = props => {
    return(
        <div className='view-menu'>
            <p>View mode</p>
            <div className = 'view-menu__button-conteiner'>
                <Button
                mode ='cards'
                clickHundler = {props.changeViewModeHandler}
                >Cards</Button>
                <Button
                mode = 'list'
                clickHundler = {props.changeViewModeHandler}
                >List</Button>
            </div>
            
        </div>
    )
}

export default ViewMenu;
import React, {Component} from 'react';
import Button from '../../Components/UI/Button/Button';
/* import Checkbox from '@material-ui/core/Checkbox'; */
import './Header.scss';

export default class Header extends Component{
    render(){
        return(
            <div className = 'header'>
                <div className = "header__logo">
                    <p>set creator for</p>
                    <strong>Dominion</strong>
                </div>
                <div className = 'header__icons'>
                    <Button cls = 'button--login'>Log im</Button>
                    <Button cls = 'button--login'>Sign in</Button>
                    
                </div>
            </div>
        )
    }
}
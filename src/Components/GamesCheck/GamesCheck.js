import React, { Component } from 'react';
import './gamesCheck.scss';
import Button from '../UI/Button/Button';
import Check from '../UI/Check/Chek';
import Bookmarks from '../UI/Bookmark/Bookmarks';
import ViewMenu from '../../Components/ViewMenu/ViewMenu';

export default class GamesCheck extends Component {
    
    state = {
        bookmark: ['Change', 'View'],
        bookmarkIsActive : 'Change'
    }

    bookmarkOnClick = (name) => {
        this.setState({bookmarkIsActive : name})
    }

    render(){
        const cls = ['game-check']
        if(!this.props.isOpen){
            cls.push('game-check-open')
        }else{
            cls.push('game-check-close')
        }

        const changeMenu = (
            <React.Fragment>
                <h1>Selected set</h1>
                <form onSubmit = {(evt)=>{evt.preventDefault()}}>
                    <div className = 'check-group'>
                        <Check
                        boxes = {this.props.boxes}
                        checkHandler = {this.props.checkHandler}
                        />
                    </div>  
                    <Button
                    cls = 'button--game-check'
                    clickHundler = {this.props.clickHundler}
                    >Create set</Button>
                    <span className={this.props.isValid ? 'valid': 'invalid'}>Check anithing!</span>
                </form>
            </React.Fragment>
        )
        return ( 
            <div className = {cls.join(' ')}>

                <Bookmarks
                bookmark = {this.state.bookmark}
                bookmarkIsActive = {this.state.bookmarkIsActive}
                bookmarkHandler = {this.bookmarkOnClick}
                />
                <div className = 'game-check__conteiner'>
                {this.state.bookmarkIsActive === 'Change'
                ? changeMenu
                : <ViewMenu
                changeViewModeHandler = {this.props.changeViewModeHandler}
                />
                }
               
                </div>           
            </div>
           
        )
    }
 
}

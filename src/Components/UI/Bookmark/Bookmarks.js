import React from 'react'
import Bookmark from './Bookmark.js/Bookmark';
import './Bookmarks.scss';

const Bookmarks = props => {

    return (
        <div className = 'bookmarks'>
            {props.bookmark.map(el => {
             return(
                    <Bookmark 
                    key = {el+Math.random()} 
                    name={el} isActive = {props.bookmarkIsActive}
                    bookmarkHandler = {props.bookmarkHandler}
                    />
                    )
            })}
        </div>
    )
}

export default Bookmarks;
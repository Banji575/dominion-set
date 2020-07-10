import React from 'react';
import './Bookmark.scss';

const Bookmark = props => {
    const cls  = ['bookmark'];
    if (props.isActive === props.name){
        cls.push('active')
    }
    return(
    <p className = {cls.join(' ')}
        onClick = {()=>props.bookmarkHandler(props.name)}
    >{props.name}</p>
    )
}

export default Bookmark;
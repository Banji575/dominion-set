import React from 'react';

const socialIcon = props => {
    const style = {color:'tomato'}
    const icon = props.type === 'twitter' 
    ? <i class="fa fa-twitter-square fa-3x" style={style} aria-hidden="true"></i>
    : <i class="fa fa-instagram fa-3x" style={style} aria-hidden="true"></i>
    return (
        <div className='social-icon'>
            {icon}
        </div>
    )
}

export default socialIcon;
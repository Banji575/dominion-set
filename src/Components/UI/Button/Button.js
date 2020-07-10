import React from "react";
import './button.scss';

const Button = props => {
    const mode = props.mode || ''
return(
<button
className={props.cls}
onClick = {(evt)=>props.clickHundler(evt, mode)}
>{props.children}</button>
)
}

export default Button;
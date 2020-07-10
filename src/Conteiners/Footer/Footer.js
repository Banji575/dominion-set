import React, { Component } from 'react';
import SocialIcon from '../../Components/UI/icon/SocialIcon';
import './footer.scss';

export default class Footer extends Component{
    render() {
        return (
            <div className = 'footer'>
               <SocialIcon
               type = 'twitter'
               />
               <SocialIcon
               type = 'instagram'
               />
            </div>
        )
    }
}
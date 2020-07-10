import React,{Component} from 'react';
import Header from '../../Conteiners/Header/Header';
import Footer from '../../Conteiners/Footer/Footer';
import './layout.scss';

export default class Layout extends Component{

    render(){
        return(
            <div className='layout'>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
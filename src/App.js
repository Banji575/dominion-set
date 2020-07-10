import React,{Component} from 'react';
import Layout from './HOC/layout/Layout';
import GameSet from './Conteiners/GameSet/GameSet';
import './app.scss';

export default class App extends Component {

  render(){
    return (
      <Layout>
        <GameSet/>
      </Layout>
    )
  }
}
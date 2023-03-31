import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component {


  render () {
  return (
      <div className="App">
        <PersonCard firstName="Jay" lastName="Hudson" age="22" hairColor="tumbleweed"/>
        <PersonCard firstName="Bae" lastName="Jiwan" age="26" hairColor="peach"/>
        <PersonCard firstName="Fay" lastName="Fudgeson" age="33" hairColor="peanutbutter"/>
        <PersonCard firstName="Gay" lastName="Focker" age="44" hairColor="midnight"/>
      </div>
    )
  }


}





export default App;

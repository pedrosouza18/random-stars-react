import React, { Component } from 'react';
import './App.css';
import List from './list/list';
import Button from './button/button';
import Service from './services/service';

class App extends Component {

  constructor() {
    super();
    this.state = {
      planet: {},
      hasValue: false,
      init: true
    };
    this.api = new Service();
  }

  getPlanetsStars = () => {
    const randomNumber = Math.floor(Math.random() * 61 + 1);
    this.api.getPlanets(randomNumber) 
      .then(data => {
        this.setState({hasValue: false, init: false});
        setTimeout(() => {
          this.setState({planet: data, hasValue: true, init: false});
        }, 1000);
      });
  }

  render() {
    return (
      <section>
        <div className="box">
          <List planet={this.state.planet} loader={this.state.hasValue} init={this.state.init}/>
          <Button click={this.getPlanetsStars}/>
        </div>
      </section>
    );
  }
}

export default App;

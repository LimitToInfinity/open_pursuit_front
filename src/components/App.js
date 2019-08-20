import React, { Component } from 'react';
import './../stylesheets/App.css';
import WorldMap from './worldmap';
import Nav from './nav';

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      keyPress: "",
    }

    this.App = React.createRef();
  }

  componentDidMount() {
    this.App.current.focus();
  }

  handleKeyDown = (event) => {
    this.setState({ keyPress: event.key })
  }
   clearKeyPress = () => {
      this.setState({ keyPress: "" })
   }
  
  render() {
    const { keyPress } = this.state;
    
    return (
      <main 
        className="app"
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        ref={this.App}
      >
        <Nav />
        <WorldMap keyPress={keyPress} clearKeyPress={this.clearKeyPress} />
      </main>
    );
  }
}

import React, { Component } from 'react';
import './../stylesheets/App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Home";
import WorldMap from './worldmap';
import HerosPage from "./HerosPage";
import AppNotFound from "./AppNotFound";
import OpenPursuitLogo from "./../openPursuit.png";

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      heros: [],
      weapons: [],
      powers: [],
      keyPress: "",
    }

    this.App = React.createRef();
  }

  backendURL = "https://openpursuitback.herokuapp.com/"
  herosURL = `${this.backendURL}heros/`
  weaponsURL = `${this.backendURL}weapons/`
  powersURL = `${this.backendURL}powers/`

  async componentDidMount() {
    // this.App.current.focus();

    try {
      const herosResponse = await fetch(this.herosURL)
      const heros = await herosResponse.json()
      this.setState({ heros: heros.data })      
    } catch (err) {
      console.error("heros", err)
    }

    try {
      const weaponsResponse = await fetch(this.weaponsURL)
      const weapons = await weaponsResponse.json()
      this.setState({ weapons, })      
    } catch (err) {
      console.error("weapons", err)
    }

    try {
      const powersResponse = await fetch(this.powersURL)
      const powers = await powersResponse.json()
      this.setState({ powers: powers.data })      
    } catch (err) {
      console.error("powers", err)
    }

  }

  newHero = (hero) => {
    const { heros } = this.state;
    this.setState({ heros: [...heros, hero] })
  }

  updateHero = (updatedHero) => {
    const { heros } = this.state;
    const otherHeros = heros.filter(hero => hero.id !== updatedHero.id)
    const newHeros = [...otherHeros, updatedHero]
    this.setState({ heros: newHeros, })
  }

  removeHero = (heroId) => {
    const { heros } = this.state;
    const newHeros = heros.filter(hero => hero.id !== heroId)
    this.setState({ heros: newHeros, })
  }

  handleKeyDown = (event) => {
    this.setState({ keyPress: event.key })
  }

  clearKeyPress = () => {
    this.setState({ keyPress: "" })
  }
  
  render() {
    const { keyPress, heros, weapons, powers } = this.state;
    
    return (
      <Router>

        <main 
          className="app"
          onKeyDown={this.handleKeyDown}
          tabIndex="0"
          ref={this.App}
        >

          <nav className="nav">
            <div className="logo">
              <img alt="Open Pursuit Logo" src={OpenPursuitLogo} />
              <h1>Open Pursuit!</h1>
            </div>
            <section className="links">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/worldmap/">World Map</Link>
              <Link className="link" to="/heros/">Heroes Page</Link>
            </section>
          </nav>

          <Switch>

            <Route
              path="/heros/"
              render={(props) =>
                <HerosPage
                  {...props}
                  heros={heros}
                  weapons={weapons}
                  powers={powers}
                  newHero={this.newHero}
                  removeHero={this.removeHero}
                  updateHero={this.updateHero}
                />
              }
            />

            <Route
              path="/worldmap/"
              render={(props) =>
                <WorldMap
                  {...props}
                  keyPress={keyPress}
                  clearKeyPress={this.clearKeyPress} 
                />
              }
            />

            <Route exact path="/" component={ Home } />

            <Route component={ AppNotFound } />

          </Switch>

        </main>
        
      </Router>
    );
  }
}

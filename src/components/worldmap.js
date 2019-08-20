import React, { Component } from "react";
import Hero from "./hero"
import Foe from "./foe"
import Friend from "./friend"
import Shop from "./shop"

export default class WorldMap extends Component {

    render() {
        const { keyPress, clearKey } = this.props;

        return (
            <div className="game-container">
                <h2>World Map</h2>
                <section className="world-map">
                    <Hero keyPress={keyPress} clearKey={clearKey}/>
                    <Foe />
                    <Friend />
                    <Shop />
                </section>
            </div>
        );
    }
}
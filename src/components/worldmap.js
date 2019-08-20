import React, { Component } from "react";
import Hero from "./hero"

export default class WorldMap extends Component {

    render() {
        const { keyPress, clearKey } = this.props;

        return (
            <div className="game-container">
                <h2>World Map</h2>
                <section className="world-map">
                    <Hero keyPress={keyPress} clearKey={clearKey}/>
                </section>
            </div>
        );
    }
}
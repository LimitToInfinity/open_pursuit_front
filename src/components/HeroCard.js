import React, { Component } from "react";

import UpdateHeroForm from "./UpdateHeroForm";

export default class HeroCard extends Component {
    state = {
        isClicked: false,
    }

    powerTags = (powers) => {
        return powers.map((power, index) => {
            return <li className="power-names" key={index}>{ power.data.attributes.name }</li>
        });
    }

    herosURL = "https://openpursuitback.herokuapp.com/heros/";

   changeIsClicked = () => {
        const { isClicked } = this.state;
        this.setState({ isClicked: !isClicked });
    }

    deleteClick = () => {

        const { hero, removeHero } = this.props;
        const { id } = hero;

        fetch(`${this.herosURL}${this.props.hero.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })

        removeHero(id);
    }

    render() {

        const { hero, allWeapons, allPowers, updateHero } = this.props;
        const { id, attributes } = hero;
        const { name, weapon, powers, hero_attributes } = attributes;

        if (!this.state.isClicked) {
            return (
                <div className="hero-card">
                    <div className="hero-card-attributes">
                        <div className="hero-card-name">
                            <label className="hero-card-label">
                                Hero Name:
                            </label>
                            <p>{ name }</p>
                        </div>
                        <div className="hero-card-weapon">
                            <label className="hero-card-label">
                                Weapon:
                            </label>
                            <p>{ weapon.name }</p>
                        </div>
                        <div className="hero-card-powers">
                            <label className="hero-card-label" id="powers-label">
                                Powers:
                            </label>
                            <ul className="powers-list">
                                { this.powerTags(powers) }
                            </ul>
                        </div>
                    </div>
                    <div className="hero-card-buttons">
                        <button onClick={this.changeIsClicked}>Change Attributes</button>
                        <button onClick={this.deleteClick}>Delete</button>
                    </div>
                </div>
            );
        } else {
            const powersMatch = powers.map(power => power.data)
            return (
                <div className="hero-card">
                    <UpdateHeroForm 
                        hero={hero}
                        id={id}
                        name={name}
                        weapon={weapon}
                        prevPowers={powersMatch}
                        heroAttributes={hero_attributes}
                        allWeapons={allWeapons}
                        allPowers={allPowers}
                        changeIsClicked={this.changeIsClicked}
                        updateHero={updateHero}
                    />
                </div>
            );
        }
    }
}
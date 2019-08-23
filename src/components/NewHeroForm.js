import React, { Component } from "react";

import Checkbox from "./Checkbox";

export default class NewHeroForm extends Component {
    state = {
        heroName: "",
        weapon_id: 1,
        powers: [],
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const herosURL = "http://localhost:3000/heros/"

        const { heroName, weapon_id, powers } = this.state;
        const { handleClick, handleError, noError, newHero } = this.props;

        const powerIds = powers.map(power => power.id)

        const heroBody = {
            hero: { name: heroName,
                weapon_id,
                power_ids: ["", ...powerIds],
            }
        }

        fetch(herosURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(heroBody)
        })
            .then(response => response.json())
            .then(hero => {
                if (!hero.name) {
                    newHero(hero.data);
                    noError();
                } else {
                    handleError(hero.name[0]);
                }
            })        

        handleClick();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, });
    }

    weaponChoices = () => {
        const { weapons } = this.props;

        return weapons.map(weapon => {
            const { id, name } = weapon;
            return <option value={id} key={id}>{name}</option>;
        });
    }

    addPower = (power) => {
        const { powers } = this.state;
        this.setState({ powers: [...powers, power] });
    }

    removePower = (removedPower) => {
        const { powers } = this.state;
        const newPowers = powers.filter(power => power.id !== removedPower.id);

        this.setState({ powers: newPowers });
    }

    powerChoices = () => {
        const { powers } = this.props;
        
        return powers.map((power, index) => {
            const { id, attributes } = power;
            let checked = false;
            return <Checkbox
                key={index}
                id={id}
                name={attributes.name}
                power={power}
                checked={checked}
                addPower={this.addPower}
                removePower={this.removePower}
            />
        });
    }

    render() {

        const { heroName } = this.state;

        return (
            <form className="new-hero-form" onSubmit={this.handleSubmit}>
                <div className="new-hero-form-top">
                    <div className="new-hero-form-name">
                        <label htmlFor="heroName">Declare Your Name Hero</label>
                        <input
                            type="text"
                            name="heroName"
                            value={heroName}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <div className="new-hero-form-weapon">
                        <label htmlFor="weapon_id">Choose Your Weapon</label>
                        <select name="weapon_id" className="weapon-select" onChange={this.handleChange}>
                            { this.weaponChoices() }
                        </select>
                    </div>
                </div>
                <div className="new-hero-form-bottom">
                    <div className="new-hero-form-power-container">
                        <label>Select Your Powers</label>
                        <div className="new-hero-form-powers">
                            { this.powerChoices() }
                        </div>
                    </div>
                    <input type="submit" value="Emerge!"></input>
                </div>
            </form>
        );
    }
}
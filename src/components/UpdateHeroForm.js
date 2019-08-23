import React, { Component } from "react";

import Checkbox from "./Checkbox";

export default class UpdateHeroForm extends Component {
    state = {
        heroName: this.props.hero.attributes.name,
        weapon_id: this.props.hero.attributes.weapon.id,
        powers: this.props.prevPowers,
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { hero, updateHero, changeIsClicked } = this.props;
        const { id } = hero;
        const { heroName, weapon_id, powers } = this.state;

        const herosURL = "http://localhost:3000/heros/"

        const powerIds = powers.map(power => power.id)

        const heroBody = {
            hero: { name: heroName,
                weapon_id,
                power_ids: ["", ...powerIds],
            }
        }

        fetch(`${herosURL}${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(heroBody)
        })
            .then(response => response.json())
            .then(hero => updateHero(hero.data))

        changeIsClicked();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, });
    }

    weaponChoices = () => {
        const { allWeapons } = this.props;

        return allWeapons.map(weapon => {
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
        const { allPowers, hero } = this.props;
        const { attributes } = hero;
        const { powers } = attributes;

        const prevPowerIds = powers.map(prevPower => prevPower.data.id)

        return allPowers.map((power, index) => {
            const { id, attributes } = power;
            let checked;
            prevPowerIds.includes(power.id) ? checked = true : checked = false;
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

        const { heroName, weapon_id } = this.state;
        const { changeIsClicked } = this.props;

        return (
            <form className="update-hero-form" onSubmit={this.handleSubmit}>
                <div className="update-hero-form-name">
                    <label htmlFor="heroName">Declare Your Name Hero</label>
                    <input
                        type="text"
                        name="heroName"
                        value={heroName}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>
                <div className="update-hero-form-weapon">
                    <label htmlFor="weapon_id">Choose Your Weapon</label>
                    <select 
                        className="weapon-select"
                        name="weapon_id"
                        value={weapon_id}
                        onChange={this.handleChange}
                    >
                        { this.weaponChoices() }
                    </select>
                </div>
                <div className="update-hero-form-power-container">
                    <label>Select Your Powers</label>
                    <div className="update-hero-form-powers">
                        { this.powerChoices() }
                    </div>
                </div>
                <div className="update-hero-form-buttons">
                    <input type="submit" value="Re-Emerge!"></input>
                    <button onClick={changeIsClicked}>Nevermind</button>
                </div>
            </form>
        );
    }
}
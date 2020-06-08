import React, { Component } from "react";

import Checkbox from "./Checkbox";
import Option from "./Option";

export default class HeroForm extends Component {
    state = {
        heroName: this.props.hero.attributes.name || "",
        weaponId: this.props.hero.attributes.weapon.id || 1,
        powers: this.props.prevPowers || [],
    };

    render() {
        return (
            <form>

            </form>
        );
    }
}
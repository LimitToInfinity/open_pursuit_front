import React, { Component } from "react";

import HeroCardsContainer from "./HeroCardsContainer"
import NewHeroForm from "./NewHeroForm"
import ErrorMessage from "./ErrorMessage";

export default class HerosPage extends Component {
    state = {
        isClicked: false,
        isError: false,
        errorMessage: "",
    }

    handleClick = () => {
        const { isClicked } = this.state;
        this.setState({ isClicked: !isClicked })
    }

    noError = () => {
        this.setState({ isError: false, })
    }

    handleError = (errorMessage) => {
        this.setState({ isError: true, errorMessage, })
    }

    render() {

        const { isClicked, isError, errorMessage } = this.state;
        const { heros, weapons, powers, newHero, removeHero, updateHero } = this.props;

        return (
            <section className="heros-page">
                <h2>Heros Page</h2>
                {isError && <ErrorMessage errorMessage={errorMessage} />}
                <button className="new-hero" onClick={this.handleClick}>
                    {isClicked
                        ? "Nevermind"
                        : "Create New Hero"
                    }
                </button>
                {isClicked && 
                    <NewHeroForm 
                        handleClick={this.handleClick}
                        handleError={this.handleError}
                        noError={this.noError}
                        weapons={weapons}
                        powers={powers}
                        newHero={newHero}
                    />
                }
                <HeroCardsContainer
                    heros={heros}
                    allWeapons={weapons}
                    allPowers={powers}
                    removeHero={removeHero}
                    updateHero={updateHero}
                />
            </section>
        );
    }
}
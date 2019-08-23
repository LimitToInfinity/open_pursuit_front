import React from "react";
import HeroCard from "./HeroCard"

export default function HeroCardsContainer(props) {

    const { heros, allWeapons, allPowers, removeHero, updateHero } = props;

    const heroCards = heros.map((hero, index) => {
        return <HeroCard
            key={index}
            hero={hero}
            allWeapons={allWeapons}
            allPowers={allPowers}
            removeHero={removeHero}
            updateHero={updateHero}
        />
    })

    return (
        <section className="hero-cards-container">
            { heroCards }
        </section>
    );
}
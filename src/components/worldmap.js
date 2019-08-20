import React, { Component } from "react";

import Hero from "./hero"
import Foe from "./foe"
import Friend from "./friend"
import Shop from "./shop"
import FriendModal from "./friendmodal";
import ShopModal from "./ShopModal";
import FoeModal from "./FoeModal";

export default class WorldMap extends Component {
    state = {
        showFriendMenu: false,
        showShopMenu: false,
        showFoeMenu: false,
    }

    showFriendModal = () => {
        this.setState({ showFriendMenu: !this.state.showFriendMenu })
        setTimeout(() => this.setState({ showFriendMenu: false }), 1300)
    }

    showShopModal = () => {
        this.setState({ showShopMenu: !this.state.showShopMenu })
        setTimeout(() => this.setState({ showShopMenu: false }), 1300)
    }

    showFoeModal = () => {
        this.setState({ showFoeMenu: !this.state.showFoeMenu })
        setTimeout(() => this.setState({ showFoeMenu: false }), 1300)
    }

    render() {
        const { showFriendMenu, showShopMenu, showFoeMenu } = this.state;
        const { keyPress, clearKeyPress } = this.props;

        return (
            <div className="game-container">
                <h2>World Map</h2>
                <section className="world-map">
                    <Hero
                        keyPress={keyPress}
                        clearKeyPress={clearKeyPress}
                        showFriendModal={this.showFriendModal}
                        showShopModal={this.showShopModal}
                        showFoeModal={this.showFoeModal}
                    />
                    <Foe />
                    <Friend />
                    <Shop />
                    {showFriendMenu && <FriendModal />}
                    {showShopMenu && <ShopModal />}
                    {showFoeMenu && <FoeModal />}
                </section>
            </div>
        );
    }
}
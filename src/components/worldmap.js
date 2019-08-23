import React, { Component } from "react";
import Phaser from "phaser";

import Hero from "./hero";
import Foe from "./foe";
import Friend from "./friend";
import Shop from "./shop";
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

    // config = {
    //     type: Phaser.AUTO,
    //     width: 800,
    //     height: 600,
    //     physics: {
    //         default: 'arcade',
    //         arcade: {
    //             gravity: { y: 200 }
    //         }
    //     },
    //     scene: {
    //         preload: this.preload,
    //         create: this.create
    //     }
    // };

    // game = new Phaser.Game(this.config);
 
    // preload ()
    // {
    //     this.load.setBaseURL('http://labs.phaser.io');
    
    //     this.load.image('sky', 'assets/skies/space3.png');
    //     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    //     this.load.image('red', 'assets/particles/red.png');
    // }
    
    // create () {
    //     this.add.image(400, 300, 'sky');
    
    //     var particles = this.add.particles('red');
    
    //     var emitter = particles.createEmitter({
    //         speed: 100,
    //         scale: { start: 1, end: 0 },
    //         blendMode: 'ADD'
    //     });
    
    //     var logo = this.physics.add.image(400, 100, 'logo');
    
    //     logo.setVelocity(100, 200);
    //     logo.setBounce(1, 1);
    //     logo.setCollideWorldBounds(true);
    
    //     emitter.startFollow(logo);
    // }

    // shouldComponentUpdate() {
    //     return false
    //   }

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
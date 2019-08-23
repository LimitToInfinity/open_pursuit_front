import React, { Component } from "react";

// import Phaser from 'phaser';
// import { IonPhaser } from '@ion-phaser/react';

import Hero from "./hero";
import Foe from "./foe";
import Friend from "./friend";
import Shop from "./shop";
import FriendModal from "./friendmodal";
import ShopModal from "./ShopModal";
import FoeModal from "./FoeModal";

export default class WorldMap extends Component {
    // state = {
    //     initialize: true,
    //     game: {
    //       width: "100%",
    //       height: "100%",
    //       type: Phaser.AUTO,
    //       scene: {
    //         init: function() {
    //           this.cameras.main.setBackgroundColor('#24252A')
    //         },
    //         create: () => {
    //           this.helloWorld = this.add.text(
    //             this.cameras.main.centerX, 
    //             this.cameras.main.centerY, 
    //             "Hello World", { 
    //               font: "40px Arial", 
    //               fill: "#ffffff" 
    //             }
    //         );
    //         this.helloWorld.setOrigin(0.5);
    //         },
    //         update: function() {
    //           this.helloWorld.angle += 1;
    //         }
    //       }
    //     }
    // }

    // state = {
    //     bird: {
    //         x: 50,
    //         y: 100,
    //         radius: 20
    //     }
    // }

    state = {
        showFriendMenu: false,
        showShopMenu: false,
        showFoeMenu: false,
    };

    showFriendModal = () => {
        this.setState({ showFriendMenu: !this.state.showFriendMenu });
        setTimeout(() => this.setState({ showFriendMenu: false }), 1300);
    }

    showShopModal = () => {
        this.setState({ showShopMenu: !this.state.showShopMenu });
        setTimeout(() => this.setState({ showShopMenu: false }), 1300);
    }

    showFoeModal = () => {
        this.setState({ showFoeMenu: !this.state.showFoeMenu });
        setTimeout(() => this.setState({ showFoeMenu: false }), 1300);
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

    // draw = () => {
    //     const ctx = this.refs.canvas.getContext("2d");
    //     // change this colour to change the colour of your 
    //     // "pen" in the canvas 
    //     ctx.fillStyle = "green";
    //     ctx.beginPath();
    //     ctx.arc(this.state.bird.x, this.state.bird.y,                        
    //             this.state.bird.radius, 0, 2 * Math.PI);
    //     ctx.fill();
    //     ctx.stroke();
    // }

    // componentDidMount() {
    //     this.draw();
    // }

    render() {
        const { showFriendMenu, showShopMenu, showFoeMenu } = this.state;
        const { keyPress, clearKeyPress } = this.props;

        // const { initialize, game } = this.state;

        return (
            <div className="game-container">
                <h2>World Map</h2>
                {/* <IonPhaser game={game} initialize={initialize} /> */}
                {/* <canvas ref="canvas" width={800} height={500} /> */}
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
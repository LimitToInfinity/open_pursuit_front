import React, { PureComponent } from "react";

export default class Hero extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            translateX: 0,
            translateY: 0,
        }

        this.Hero = React.createRef();
    }

    componentDidUpdate() {
        const { keyPress, clearKeyPress,
            showFriendModal, showShopModal, showFoeModal }
        = this.props;
        const { translateX, translateY } = this.state;
        const hero = this.Hero.current;

        // if ( (translateX > 0 && translateX < 100 && translateY === 100) ) {
        //     console.log("friend")
        // }


        switch (keyPress) {
            case "ArrowUp":
                clearKeyPress();
                if (translateY > 0
                    // Friend collision
                    && (translateX < 10 || translateX > 90 || translateY > 100)
                    // Shop collision
                    && (translateX < 60 || translateX > 140 || translateY < 110 || translateY > 200)
                    // Foe collision
                    && (translateX < 560 || translateX > 640 || translateY < 110 || translateY > 200)
                    ) {
                    this.setState({ translateY: translateY - 10 });
                    hero.style.transform = `translate(${translateX}px, ${translateY - 10}px)`;
                }
                break;
            case "ArrowDown":
                clearKeyPress();
                if (translateY < 450
                    // Friend collision
                    && (translateX < 10 || translateX > 90 || translateY > 90)
                    // Shop collision
                    && (translateX < 60 || translateX > 140 || translateY < 100 || translateY > 150)
                    // Foe collision
                    && (translateX < 560 || translateX > 640 || translateY < 100 || translateY > 150)
                    ) {
                    this.setState({ translateY: translateY + 10 });
                    hero.style.transform = `translate(${translateX}px, ${translateY + 10}px)`;
                }
                break;
            case "ArrowRight":
                clearKeyPress();
                if (translateX < 750
                    // Friend collision
                    && (translateY < 10 || translateY > 90 || translateX > 90)
                    // Shop collision
                    && (translateY < 110 || translateY > 190 || translateX < 50 || translateX > 140)
                    // Foe collision
                    && (translateY < 110 || translateY > 190 || translateX < 550 || translateX > 640)
                    ) {
                    this.setState({ translateX: translateX + 10 });
                    hero.style.transform = `translate(${translateX + 10}px, ${translateY}px)`;
                }
                break;
            case "ArrowLeft":
                clearKeyPress();
                if (translateX > 0
                    // Friend collision
                    && (translateY < 10 || translateY > 90 || translateX > 100)
                    // Shop collision
                    && (translateY < 110 || translateY > 190 || translateX < 60 || translateX > 150)
                    // Foe collision
                    && (translateY < 110 || translateY > 190 || translateX < 560 || translateX > 650)
                    ) {
                    this.setState({ translateX: translateX - 10 });
                    hero.style.transform = `translate(${translateX - 10}px, ${translateY}px)`;
                }
                break;
            case "a":
                clearKeyPress();
                // Friend interaction
                if ( (translateX > 0 && translateX < 100 && translateY === 0)
                    || (translateX > 0 && translateX < 100 && translateY === 100)
                    || (translateY > 0 && translateY < 100 && translateX === 0)
                    || (translateY > 0 && translateY < 100 && translateX === 100)
                    ) {
                    showFriendModal();
                // Shop interaction
                } else if ( (translateX > 50 && translateX < 150 && translateY === 100)
                    || (translateX > 50 && translateX < 150 && translateY === 200)
                    || (translateY > 100 && translateY < 200 && translateX === 50)
                    || (translateY > 100 && translateY < 200 && translateX === 150)
                    ) {
                    showShopModal();
                // Foe interaction
                } else if ( (translateX > 550 && translateX < 650 && translateY === 100)
                    || (translateX > 550 && translateX < 650 && translateY === 200)
                    || (translateY > 100 && translateY < 200 && translateX === 550)
                    || (translateY > 100 && translateY < 200 && translateX === 650)
                    ) {
                    showFoeModal();
                }
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="hero" style={{transform:""}} ref={this.Hero}>
                <p>Citizen Hero</p>
            </div>
        );
    }
}
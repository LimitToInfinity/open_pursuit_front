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
        const { keyPress, clearKey } = this.props;
        const { translateX, translateY } = this.state;
        const hero = this.Hero.current;

        if ( (translateX > 0 && translateY > 0) && (translateX < 100 && translateY < 100) ) {
            console.log("friend")
        }


        switch (keyPress) {
            case "ArrowUp":
                if (translateY > 0
                    && (translateX < 10 || translateX > 90 || translateY > 100)
                    && (translateX < 60 || translateX > 140 || translateY < 110 || translateY > 200)
                    && (translateX < 560 || translateX > 640 || translateY < 110 || translateY > 200)
                    ) {
                    this.setState({ translateY: translateY - 10 });
                    hero.style.transform = `translate(${translateX}px, ${translateY - 10}px)`;
                    clearKey();
                }
                break;
            case "ArrowDown":
                if (translateY < 450
                    && (translateX < 10 || translateX > 90 || translateY > 90)
                    && (translateX < 60 || translateX > 140 || translateY < 100 || translateY > 150)
                    && (translateX < 560 || translateX > 640 || translateY < 100 || translateY > 150)
                    ) {
                    this.setState({ translateY: translateY + 10 });
                    hero.style.transform = `translate(${translateX}px, ${translateY + 10}px)`;
                    clearKey();
                }
                break;
            case "ArrowRight":
                if (translateX < 750
                    && (translateY < 10 || translateY > 90 || translateX > 90)
                    && (translateY < 110 || translateY > 190 || translateX < 50 || translateX > 140)
                    && (translateY < 110 || translateY > 190 || translateX < 550 || translateX > 640)
                    ) {
                    this.setState({ translateX: translateX + 10 });
                    hero.style.transform = `translate(${translateX + 10}px, ${translateY}px)`;
                    clearKey();
                }
                break;
            case "ArrowLeft":
                if (translateX > 0
                    && (translateY < 10 || translateY > 90 || translateX > 100)
                    && (translateY < 110 || translateY > 190 || translateX < 60 || translateX > 150)
                    && (translateY < 110 || translateY > 190 || translateX < 560 || translateX > 650)
                    ) {
                    this.setState({ translateX: translateX - 10 });
                    hero.style.transform = `translate(${translateX - 10}px, ${translateY}px)`;
                    clearKey();
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
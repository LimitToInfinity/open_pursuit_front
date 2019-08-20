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

        switch (keyPress) {
            case "ArrowUp":
                if (translateY > 0) {
                    this.setState({ translateY: translateY - 5 });
                    hero.style.transform = `translate(${translateX}px, ${translateY - 5}px)`;
                    clearKey();
                }
                break;
            case "ArrowDown":
                if (translateY < 400) {
                    this.setState({ translateY: translateY + 5 });
                    hero.style.transform = `translate(${translateX}px, ${translateY + 5}px)`;
                    clearKey();
                }
                break;
            case "ArrowRight":
                if (translateX < 750) {
                    this.setState({ translateX: translateX + 5 });
                    hero.style.transform = `translate(${translateX + 5}px, ${translateY}px)`;
                    clearKey();
                }
                break;
            case "ArrowLeft":
                if (translateX > 0) {
                    this.setState({ translateX: translateX - 5 });
                    hero.style.transform = `translate(${translateX - 5}px, ${translateY}px)`;
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
import React, { Component } from "react";

export default class Checkbox extends Component {
    state = {
        isChecked: this.props.checked,
    }

    handleClick = () => {
        const { isChecked } = this.state;
        const { power, addPower, removePower } = this.props;

        this.setState({ isChecked: !isChecked})
       
        isChecked
            ? removePower(power)
            : addPower(power)
    }

    handleChange = () => {
        return null
    }

    render() {

        const { isChecked } = this.state;
        const { id, name } = this.props;

        return (
            <div onClick={this.handleClick} className="checkbox">
                <input 
                    type="checkbox"
                    name={name}
                    value={id} 
                    checked={isChecked} 
                    onChange={this.handleChange}     
                />
                <label htmlFor={name}>{name}</label>
            </div>
        );
    }
}
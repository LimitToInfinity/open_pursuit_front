import React from "react";

export default function Option(props) {

    const { id, name } = props;

    return (
        <option value={id}>
            {name}
        </option>
    );
}
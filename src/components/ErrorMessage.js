import React from "react";

export default function ErrorMessage(props) {

    const { errorMessage } = props;

    return (
        <div className="error-message">
            <p>{errorMessage}</p>
        </div>
    );
}
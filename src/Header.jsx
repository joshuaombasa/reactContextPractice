import React from "react";

function Header(props) {
    return (
        <div className="header--container">
            <h1>Welcome to {props.username}</h1>
        </div>
    )
}

export default Header
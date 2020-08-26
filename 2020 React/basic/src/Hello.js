import React from "react";
import PropTypes from "prop-types";

// Functional Component
// return JSX
function Hello({name="undefined", color="black" /* Default Props */, children }) {
    return (
    <div>
        <div style={{color}}>Hi, {name}.</div>
        <div>{children}</div>
    </div>
    );
}

// Default Props
/*
Hello.defaultProps = {
    name: "undefined name",
    color: "black",
};
*/

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Hello;
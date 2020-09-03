import React from "react";
import PropTypes from "prop-types";

// Functional Component
// return JSX
function Hello({name="undefined", color="black" /* Default Props */, isLoggedIn, children }) {
    return (
    <div>
        <div style={{color}}>Hi, {name || "이름없음"}.</div>
        <div>{children}</div>
        <div>{isLoggedIn && "로그인됨"}</div>
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
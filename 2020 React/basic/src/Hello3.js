import React from "react";
import PropTypes from "prop-types";

// Functional Component
// return JSX
function Hello3({messages = []}) {
    return (
    <div>
        {messages.length > 0 && (<div>{messages.length}건 메시지</div>)}
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

Hello3.propTypes = {
}

export default Hello3;
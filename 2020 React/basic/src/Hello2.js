import React from "react";
import PropTypes from "prop-types";

function Hello2({id=0, name="이름없음", color="black", children="별명없음" }) {
    return (
    <div>
        <div style={{color}}>
            <div>학번 : {id}</div>
            <div>이름 : {name}</div>
            <div>별명 : {children}</div>
        </div>
    </div>
    );
}

Hello2.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

export default Hello2;
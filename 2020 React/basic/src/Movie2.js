// Class Component
import React, { useState, useEffect, Component } from "react";

class Movie2 extends Component {
    render() {
        const { movie, onRemove, onToggle } = this.props;
        const {id, director, title, year, active} = movie;
        const style = {
        color: active ? "red" : "black",
        cursor: "pointer"
        };

        return (
            <div>
                <b style={style} onClick={() => onToggle(id)}>{title}</b>({director}, {year})
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("나타남");
    }

    componentWillUnmount() {
        console.log("사라짐");
    }

    componentDidUpdate(prevProps) {
        console.log("업뎃됨", prevProps);
    }
}

export default Movie2;
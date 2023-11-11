import React from "react";
import grid from "../images/grid.png";

export default function Hero(){
    return (
        <div className="main-content">
            <img src={grid} alt="" className="grid"/>
            <h1 className="main-title">Online experiences</h1>
            <p className="description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </div>
    )
}
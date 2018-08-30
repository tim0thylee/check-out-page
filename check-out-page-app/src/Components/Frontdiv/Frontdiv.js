import React from "react";
import Frontdivleft from "../Frontdivleft/Frontdivleft";
import Frontdivright from "../Frontdivright/Frontdivright";
import "./Frontdiv.css"

const Frontdiv = () => {
    return (
        <div className="front-div">
            <Frontdivleft />
            <Frontdivright />
        </div>
    )
}

export default Frontdiv;
import React from "react";
import "./Backdiv.css";
import Frontdiv from "../Frontdiv/Frontdiv";

const Backdiv = () => {
    return (
        <div className="container">
            <div className="back-div">
                <div className="visa-image"></div>
                <div className="product-div">
                    <h4 className="brand-heading">BODYBP</h4>
                    <p>Classic Workout Gloves</p>
                </div>
                <hr />
                <div className="price-div">
                    <h4 className="order-total-heading">ORDER TOTAL</h4>
                    <p>90.11</p>
                </div>
            </div>
            <Frontdiv />
        </div>
    )
}

export default Backdiv;
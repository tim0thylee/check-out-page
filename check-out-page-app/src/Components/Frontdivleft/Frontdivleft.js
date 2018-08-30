import React from "react";
import "./Frontdivleft.css"

const Frontdivleft = () => {
    return (
        <div className="front-div-left">
            <div className="info-bar">
                <i className="fas fa-search"></i>
                <span><b>MOUSEOVER FOR DETAILS</b></span>
                <span className="tool-tip-span">
                    Silica gel palm to keep optimal grip
                    <br/>
                    and prevent injuries. Breathable mesh to
                    <br/>
                    keep hands dry. Easy to pull off and 
                    <br/>
                    machine washable.
                </span>
            </div>
            <div className="glove-image-div">
            </div>
            <div className="star-rating-div">
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star-half-alt"></span>
            </div>
            <div className="reviews-div">
                <a href="https://www.amazon.com"><b>SEE ALL REVIEWS</b></a>
            </div>
        </div>
    )
}

export default Frontdivleft;
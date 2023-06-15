import React from "react";
export default function Img({i, width,screenName}) {
    const imgUrl = "https://image.ch871.com/"
    return (
        <div className="mb-8">
            <img
                className="img-container"
                src={imgUrl + i}
                width={width + "px"}
                alt={screenName}
            />
        </div>
    );
}

import React from "react";
import logoImage from "../../assets/khanacedmy.png";

function Logo() {
    return (
        <div className="logo-container">
            <img src={logoImage} alt="Logo" className="w-1/4" />
        </div>
    );
}

export default Logo;
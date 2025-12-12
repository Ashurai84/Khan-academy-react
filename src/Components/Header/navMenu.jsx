import React from "react";

function NavMenu() {
    return (
        <nav className="nav-menu">
            <ul className="flex space-x-4 text-white">
                <li><a href="#home" className="text-white text-xl">Home</a></li>
                <li><a href="#about" className="text-white text-xl">About</a></li>
                <li><a href="#services" className="text-white text-xl">Services</a></li>
                <li><a href="#contact" className="text-white text-xl">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavMenu;

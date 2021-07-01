import React from 'react';
import { Link } from "react-router-dom";
import { Navigation, Drawer } from "react-mdl";
import "./style.css";

function Sidebar() {
    return (
        <Drawer className="drawer" title="Select a Page">
            <Navigation className="drawer">
                <Link to="/">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
    )
}

export default Sidebar;
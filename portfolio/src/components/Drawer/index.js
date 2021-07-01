import React from 'react';
import { Link } from "react-router-dom";
import { Navigation, Drawer } from "react-mdl";
import "./style.css";

function Sidebar() {
    function hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
   
    return (
        
        <Drawer className="drawer" title="Select a Page">
            <Navigation className="drawer">
                <Link to="/" onClick={() => hideToggle()}>About</Link>
                <Link to="/portfolio" onClick={() => hideToggle()}>Portfolio</Link>
                <Link to="/contact" onClick={() => hideToggle()}>Contact</Link>
            </Navigation>
        </Drawer>
    )
}

export default Sidebar;
import React from "react";
import { Link } from "react-router-dom";
import { Header,Navigation } from "react-mdl";
import "../pages/style.css";


function AppBar() {
    return (
        <div className="header">
            {/* <div className="row text-center"> */}
                <Header title="Aurora Brune" scroll>
                    <Navigation>
                        <Link to="/">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
            </div>
        /* </div> */
    )
}

export default AppBar;
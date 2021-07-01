import React from "react";
import Project from "../Project/project";

function Porfolio() {
    return (
        <div className="portfolio">
            <div className="proj-container">
                <div className="proj-row">
                    <div className="col">
                        <Project />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Porfolio;
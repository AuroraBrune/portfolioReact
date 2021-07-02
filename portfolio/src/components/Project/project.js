import React from "react";
import data from "../../assets/proj-data.json";
import weatherDashboard from "../../assets/images/Weather-Dashboard.png";
import cocktailCoterie from "../../assets/images/cocktail-coteriePartyInvite1.jpg";
import projectscreen from "../../assets/images/projectscreen.png";
import dayPlanner from "../../assets/images/dayPlannerLocalStorage.png";
import burgers from "../../assets/images/burgersDevoured1.jpg";
import codequiz from "../../assets/images/codequizScreen.png";
import "./proj.css"

const imagesarray = [
    weatherDashboard,
    cocktailCoterie,
    projectscreen,
    dayPlanner,
    burgers,
    codequiz
]
const Project = () => {
    const ProjData = data.map(item =>
        <div className="row">
            <div className="col"></div>
            <div className="col-lg-6">
                <img className="img-fluid rounded" src={imagesarray[item.imgsrc]}
                    alt={ item.alttext } />
                <p className="projlinks"><a href={item.url}target="_blank" rel="noreferrer" >{ item.title }</a></p>
                <p className="projDescription">{item.desc}</p>
            </div>
            <div className="col"></div>
        </div>
    );

    return (
        <div>
            {ProjData}
        </div>

    )
}

export default Project;

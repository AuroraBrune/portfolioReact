import React from "react";
import data from "../../assets/proj-data.json";
import weatherDashboard from "../../assets/images/Weather-Dashboard.png";
import cocktailCoterie from "../../assets/images/cocktail-coterieCreateInvite.jpg";
import projectscreen from "../../assets/images/projectscreen.png";
import dayPlanner from "../../assets/images/dayPlannerLocalStorage.png";
import burgers from "../../assets/images/burgersDevoured.jpg";
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
            <div className="col-lg-6">
                <img className="img-fluid rounded" src={imagesarray[item.imgsrc]}
                    alttext={item.alttext} />
                <p className="projlinks"><a href={item.url}target="_blank">{item.title}</a></p>
                <p>{item.desc}</p>
            </div>
        </div>
    );

    return (
        <div>
            { ProjData}
        </div>

    )

}

export default Project;
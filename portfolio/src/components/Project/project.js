import React from "react";
import data from "../../assets/proj-data.json";
import weatherDashboard from "../../assets/images/Weather-Dashboard.png";
import cocktailCoterie from "../../assets/images/cocktail-coterieCreateInvite.jpg";
import projectscreen from "../../assets/images/projectscreen.png";
import dayPlanner from "../../assets/images/dayPlannerLocalStorage.png";
import burgers from "../../assets/images/burgersDevoured.jpg";
import codequiz from "../../assets/images/codequizScreen.png";

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
        <div className="col-lg-3">
            <img className="img-fluid rounded float-left" src={imagesarray[item.imgsrc]}
                alttext={item.alttext} />
            <p>{item.desc}</p>
            <p className="projlinks"><a href={item.url}>{item.title}</a></p>
        </div>

    );

    return (
        <div>
            { ProjData}
        </div>

    )

}

export default Project;
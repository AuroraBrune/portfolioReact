import React from "react";
import data from "../../assets/proj-data.json";

const Project = () => {

    const imagesarray = [
        "/assets/images/responsiveWeatherDashboard.png",
        "/assets/images/cocktail-coteriePartyInvite.jpg",
        "/assets/images/projectscreen.png",
        "/assets/images/dayPlannerLocalStorage.png",
        "/assets/images/burgersDevoured.jpg",
        "/assets/images/codequizScreen.png"
    ] 
    const ProjData = data.map(item =>
        <div className="col-lg-3">
            <img className="img-fluid rounded float-left" src={imagesarray[item.imgsrc]}
                alttext={item.alttext} />
            <p desc={item.desc}></p>
            <p className="projlinks"><a href={item.url}>{item.title}</a></p>
        </div>

    );

        return (
            <div>
                { ProjData }
            </div>

        )
   
}

export default Project;
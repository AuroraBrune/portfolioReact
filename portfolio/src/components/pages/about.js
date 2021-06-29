import React from "react";
import "./style.css"
import Img2 from "../../assets/images/Aurora-profile3.jpg";

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="row">

                    <div className="col-lg-2"> 
                    I'm Aurora Brune, a Full-Stack Web Developer, with a Certificate from the
                        University of Kansas Coding Bootcamp. 
                        <p></p>
                        Technical skills include: HTML, CSS, JavaScript, jQuery, SQL, React,
                        Bootstrap, GitHub, Java, Spring Boot.
                        <p></p>
                        Management skills include: Leadership, Team Building, Training, Time Management, Client Relations.
                    </div>

                    <div className="col-lg-2">I served in the Air Force
                        working on C-5 and C-141 aircraft avionics.
                        Maintaining and troubleshooting avionics is comparable to debugging. I have a background in managment and education. Having been a Program Director for the
                        Parks and Rec Department After School/Summer Camp Programs, while working full time as a Special Ed Paraeducator
                        in the Eudora Elementary School.

                    </div>

                    <div className="col-lg-2">Looking for a career change, I enrolled in KU Coding Bootcamp program. Coding uses my
                        skillsets;
                        analyzing, correcting and developing existing systems. This new career
                        opporunity allows me
                        to reuse my existing skills and build on technology knowledge. I
                        find programming to be
                        challenging and rewarding when I find a solution while learning new ways to improve code.
                         problem solver, math and
                        science person who loves the outdoors and gardening.
                    </div>

                    <div className="col-lg-2">
                        <img src={Img2} alt="Aurora Brune" height="300px" width="225px"
                            className="photo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

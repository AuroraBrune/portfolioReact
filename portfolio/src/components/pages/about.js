import React from "react";
import "./style.css"
import Img2 from "../../assets/images/Aurora-profile3.jpg";

const About = () => {
    return (
        <div>
            <div className="container">
            <div className="row">
               
                <div className="col-lg-2">
                    I'm Aurora Brune a Full-Stack Web Developer. I recently graduated from the
                    University of Kansas Coding Bootcamp. I grew up as a Military dependent in a large family. My father served in
                    the Air Force and I joined the Air Force after High School. I worked on Aircraft maintaining and
                    troubleshooting Avionics on C-5 and C-141 aircraft, which is comparable to debugging. A problem solver, math and
                    science person who loves the outdoors and gardening.
                </div>
                <div className="col-lg-2"> I'm Aurora Brune a Full-Stack Web Developer. I recently graduated from the
                    University of Kansas Coding Bootcamp. I grew up as a Military dependent in a large family. My father served in
                    the Air Force and I joined the Air Force after High School. I worked on Aircraft maintaining and
                    troubleshooting Avionics on C-5 and C-141 aircraft, which is comparable to debugging. A problem solver, math and
                    science person who loves the outdoors and gardening.
                </div>

                <div className="col-lg-2">Currently, a Special Education Paraprofessional for 18 years and additionally, for last
                    several years, I
                    also worked a second position for the city's Parks and Recreation Department as Program Director of the After
                    School/Summer Day Camp.
                    Not afraid to take responsibities, I grew this program to a current enrollment of over 80, with up to 33 staff
                    members over the busy
                    Summer Day Camp season. Working these two jobs has been rewarding and challenging, but with the recent events
                    transpiring from
                    Covid-19 virus, like for many individuals, both of these positions have been severely impacted.
                </div>

                <div className="col-lg-2">This leads me to KU Coding Bootcamp program. I feel coding can tap into my existing
                    skillsets;
                    analyzing, correcting and developing existing systems while coaching and mentoring young talent. This new career
                    opporunity allows me
                    to reuse my existing skills and build my knowledge base of technology for the benefit of my future employer. I
                    find programming is
                    challenging and rewarding, especially when I find a solution learning new ways to improve code for a project. I
                    hope to work on a
                    team to share in their knowledge and responsibities. Thank you.
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
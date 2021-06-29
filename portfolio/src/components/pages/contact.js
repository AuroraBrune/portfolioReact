import React from "react";
import "./style.css"

const Contact = () => {
  return (

    <div className="contact"> {/*Div to select className to add background picture with css */}

      <div className="m-4 row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 ml-5 mt-5">
          <div className="jumbotron mycustom-jumbotron">
            <div className="container">
              <div className="contact-info">
                <header>
                  <h1 className="text-center text-primary">Aurora Brune</h1>
                </header>
                <ul>
                  <li><strong>Email:</strong>
                    <a href="mailto:akbrune@hotmail.com" target="blank">akbrune@hotmail.com</a>
                  </li>
                  <li><strong>GitHub:</strong>
                    <a href="https://github.com/AuroraBrune" target="blank">AuroraBrune</a>
                  </li>
                  <li><strong>GitHub Portfolio:</strong>
                    <a href="https://github.com/AuroraBrune/responsive_portfolio_homework" target="blank">Here</a>
                  </li>
                  <li><strong>Linkedin:</strong>
                    <a href="http://www.linkedin.com/in/aurorabrune" target="blank">Here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>

  );
}

export default Contact;
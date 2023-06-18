import React, { Fragment } from "react";
import About from "./about/about";
import Intro from "./intro/intro";

import "./LandingPage.css"

const LandingPage = () => {

    return <Fragment>
        <div className="landing-page-container">
            <div className="landing-page">
            </div>
            <div className="about">
                { <About />}
            </div>
            <div className="intro about">
                { <Intro />}
            </div>
        </div>
        
    </Fragment>

}

export default LandingPage;

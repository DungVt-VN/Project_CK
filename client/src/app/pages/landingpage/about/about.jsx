import "../LandingPage.css"
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="landing-page-container">
            <div className="about">
                <h1>Day la trang gioi thieu</h1>
            </div>
            <Outlet />
        </div>

    )
}

export default About;

import React, {Fragment} from "react";


import LandingPage from "./pages/landingpage/LandingPage";
import Boards from "./pages/boards/Boards";
import NavbarLindingPage from "./components/navbarLindingPage/NavbarLindingPage";
import Navbar from "./components/navbarBoards/Navbar";
import About from "./pages/landingpage/about/about";
import Intro from "./pages/landingpage/intro/intro";

import { 
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
    return <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <NavbarLindingPage />} >
                    <Route index element={ <LandingPage /> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/intro" element={ <Intro/> } />
                </Route>
                <Route path="/boards" element={ <Navbar />} >
                    <Route index element={ <Boards />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Fragment>
}


export default App;

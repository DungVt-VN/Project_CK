import React, { Fragment, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../../../static/images/work-at-low-resolution-logo-black-on-transparent-background.png'

import Login from "../login/Login";
import './NavbarLindingPage.css'
import Footer from "../footer/Footer";
import Register from "../register/Register";


const NavbarLindingPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [test, setTest] = useState([showLogin, showRegister]);

    const handleClick = () => {
        setShowLogin(!showLogin);
        setShowRegister(false);
    }

    const handleClick2 = () => {
        setShowRegister(!showRegister);
        setShowLogin(false);
    }

    const handleClick3 = () => {
        setShowLogin(false);
        setShowRegister(false);
    }




    const callbackHandlerFunction = (clickStatus) => {
        setShowLogin(clickStatus);
        setShowRegister(clickStatus);
    }

    const callbackHandlerFunction2 = (clickStatus) => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
    }

    return <Fragment>
        <div className="pg-container">
            <div className="pg-header">
                <nav className="landing">
                    <div className="nav-list">
                        <Link className="logo" to={"/"} reloadDocument><img src={logo} className="App-logo" alt="logo" onClick={ handleClick3 } /></Link>
                        <Link className="infor" to={"/about"} onClick={ handleClick3 }>Giới Thiệu</Link>
                        <Link className="infor" to={"/intro"} onClick={ handleClick3 }>Thông Tin</Link>
                        <Link className="register" onClick={ handleClick2 }>Đăng ký</Link>
                        <Link className="login" onClick={ handleClick }>Đăng Nhập</Link>
                    </div>
                </nav>
            </div>
            
            <div className="landing-container">
                <Outlet />
                {showLogin ? <Login handleClickChild={ callbackHandlerFunction } handleClickChild2={callbackHandlerFunction2}/>: null}
                {showRegister ? <Register handleClickChild={ callbackHandlerFunction } handleClickChild2={callbackHandlerFunction2}/>: null}
            </div>

            <footer className="pg-footer">
                <Footer />
            </footer>
        </div>
    </Fragment>
}

export default NavbarLindingPage;

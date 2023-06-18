import React, { Fragment, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../../../static/images/work-at-low-resolution-logo-black-on-transparent-background.png'

const Navbar = () => {

    return <Fragment>
        <div className="pg-container">
            <div className="pg-header">
                <nav className="landing">
                    <div className="nav-list">
                        <Link className="logo" to={"/boards"} reloadDocument><img src={logo} className="App-logo" alt="logo" /></Link>
                        <Link className="infor">Giới Thiệu</Link>
                        <Link className="infor">Thông Tin</Link>
                        <Link className="register">Đăng ký</Link>
                        <Link className="login">Đăng Nhập</Link>
                    </div>
                </nav>
            </div>
            
            <div className="landing-container">
                <Outlet />
            </div>
        </div>
    </Fragment>
}

export default Navbar;

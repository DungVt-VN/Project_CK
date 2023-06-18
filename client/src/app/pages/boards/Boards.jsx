import React, { Fragment, useState } from "react";
import "./Boards.css"

import Project from "../../components/project/Project";
import Profile from "../../components/profile/Profile.jsx";

const Boards = () => {
    const [viewProfile, setViewProfile] = useState(false);

    const handleClick = () => {
        setViewProfile(true);
    }

    return <Fragment>
        <div className="board-container">
            <div className="col-33">
                <div className="mission">
                    <ul>
                        <li onClick={ handleClick }>Thong Tin Ca Nhan</li>
                        <li>Lich Lam viec</li>
                        <li>Cong Viec Da Lam</li>
                        <li>Messenger</li>
                    </ul>
                </div>
                <div className="all-project">
                    <div >
                        { <Project /> }
                    </div>
                </div>
            </div>

            <div className="col-66">
                {viewProfile ? <Profile /> : null}
            </div>
        </div>
    </Fragment>
}

export default Boards;

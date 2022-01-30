import React from 'react'
import hero from "../../assets/img/hero.png";
import avatar from "../../assets/img/avatar.jpg";
import Navigation from '../Navigation';

function Name() {

    return (
        <div id="header-background" style={{ backgroundImage: `url(${hero})` }}>
            <div className="flexbox">
                <h1 id="name">Jacob Hanson</h1>
                <img src={avatar} id="avatar" alt="avatar" />
                <Navigation></Navigation>
            </div>
        </div>
    )
}

export default Name;
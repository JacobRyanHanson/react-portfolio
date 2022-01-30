import React from 'react'
import hero from "../../assets/img/hero.png";
import Navigation from '../Navigation';

function Header(props) {

    return (
        <div id="header-background" style={{ backgroundImage: `url(${hero})` }}>
            <div className="flexbox">
                <h1 id="name">Jacob Hanson</h1>
                <Navigation
                    props={props}
                ></Navigation>
            </div>
        </div>
    )
}

export default Header;
import React from 'react'
import Navigation from '../Navigation';

function Header(props) {

    return (
        <>
            <div id="header-background">
                <div className="flexbox test">
                    <h1 id="name">Jacob Hanson</h1>
                    <Navigation
                        props={props}
                    ></Navigation>
                </div>
            </div>
            <div className="divider"></div>
        </>

    )
}

export default Header;
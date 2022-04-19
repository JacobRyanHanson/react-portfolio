import React from 'react'
import Navigation from '../Navigation';

function Header(props) {

    return (
        <>
            <div className="header-background">
                <div className="header flexbox">
                    <h1 className="name">Jacob Hanson</h1>
                    <Navigation
                        props={props}
                    ></Navigation>
                </div>
            </div>
            <div className="top-divider"></div>
        </>
    )
}

export default Header;
import React from 'react'
import github from "../../assets/img/github-logo.png";
import linkedin from "../../assets/img/linkedin-logo.png";
import stackOverflow from "../../assets/img/stack-overflow-logo.png";

function Footer() {

    return (
        <>
            <div className="bottom-divider"></div>
            <div className="logo-box">
                <div className="flexbox logo-container">
                    <a href={"https://github.com/JacobRyanHanson"}>
                        <img src={github} className="github-logo" alt="github-logo" />
                    </a>
                    <a href={"https://www.linkedin.com/in/jacob-hanson-6a2279218"}>
                        <img src={linkedin} className="linkedin-logo" alt="linkedin-logo" />
                    </a>
                    <a href={"https://stackoverflow.com/users/18073303/jacob-hanson"}>
                        <img src={stackOverflow} className="stack-overflow-logo" alt="stack-overflow-logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;
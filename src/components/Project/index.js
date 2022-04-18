import React, { useState } from 'react';
import financeAssistant from "../../assets/img/finance-assistant.png";
import deepThoughts from "../../assets/img/deep-thoughts.png";
import budgetTracker from "../../assets/img/budget-tracker.png";
import taskmasterPro from "../../assets/img/taskmaster-pro.png";
import zookeeper from "../../assets/img/zookeeper.png";
import pizzaHunt from "../../assets/img/pizza-hunt.png";
import github from "../../assets/img/github-logo.png";

function Project() {
    const [projects] = useState([
        {
            name: 'Finance Assistant',
            photo: financeAssistant,
            appLink: 'https://jacobryanhanson.github.io/finance-assistant',
            githubLink: "https://github.com/JacobRyanHanson/finance-assistant"
        },
        {
            name: 'Deep Thoughts',
            photo: deepThoughts,
            appLink: 'https://deep-thoughts-54736.herokuapp.com/',
            githubLink: "https://github.com/JacobRyanHanson/deep-thoughts"
        },
        {
            name: 'Budget Tracker',
            photo: budgetTracker,
            appLink: 'https://budget-tracker-64539.herokuapp.com',
            githubLink: "https://github.com/JacobRyanHanson/budget-tracker"
        },
        {
            name: 'Taskmaster Pro',
            photo: taskmasterPro,
            appLink: 'https://jacobryanhanson.github.io/taskmaster-pro/',
            githubLink: "https://github.com/JacobRyanHanson/taskmaster-pro"
        },
        {
            name: 'Zookeeper',
            photo: zookeeper,
            appLink: 'https://zookeeper-75695.herokuapp.com/',
            githubLink: "https://github.com/JacobRyanHanson/zookeeper"
        },
        {
            name: 'Pizza Hunt',
            photo: pizzaHunt,
            appLink: 'https://pizza-hunt-98764.herokuapp.com/',
            githubLink: "https://github.com/JacobRyanHanson/pizza-hunt"
        }
    ]);

    return (
        <div id="all-projects-container" className="flexbox">
            {projects.map((project, i) => (
                <div key={project.name} className="project-container">
                    <>
                        <a key={project.name}  href={project.appLink}>
                            <span className="project-title">{project.name}</span>
                            <div className="project-sub-container" style={{ backgroundImage: `url(${project.photo})` }}></div>
                        </a>
                        <a href={project.githubLink} className='project-image'>
                            <img src={github} className="project-github-logo" alt="github-logo" />
                        </a>
                    </>
                </div>
            ))}
        </div>
    )
}

export default Project;
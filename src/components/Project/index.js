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
            appLink: 'https://jacobryanhanson.github.io/weather-dashboard/',
            githubLink: "https://github.com/JacobRyanHanson/weather-dashboard"
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
            appLink: 'https://jacobryanhanson.github.io/git-it-done/',
            githubLink: "https://github.com/JacobRyanHanson/git-it-done"
        },
        {
            name: 'Pizza Hunt',
            photo: pizzaHunt,
            appLink: 'https://jacobryanhanson.github.io/run-buddy/',
            githubLink: "https://github.com/JacobRyanHanson/run-buddy"
        }
    ]);

    return (
        <div id="all-projects-container" className="flexbox">
            {projects.map((project, i) => (
                <a className="project-container" href={project.appLink}>
                    <div className="project-sub-container" style={{ backgroundImage: `url(${project.photo})` }} key={project.name}>
                        <span className="project-title">{project.name}</span>
                        <a href={project.githubLink}>
                            <img src={github} className="project-github-logo" alt="github-logo" />
                        </a>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Project;
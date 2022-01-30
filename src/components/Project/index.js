import React, { useState } from 'react';
import financeAssistant from "../../assets/img/finance-assistant.png";
import budgetTracker from "../../assets/img/budget-tracker.png";
import weatherDashboard from "../../assets/img/weather-dashboard.png";
import taskmasterPro from "../../assets/img/taskmaster-pro.png";
import gitItDone from "../../assets/img/git-it-done.png";
import runBuddy from "../../assets/img/run-buddy.png";
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
            name: 'Budget Tracker',
            photo: budgetTracker,
            appLink: 'https://budget-tracker-64539.herokuapp.com',
            githubLink: "https://github.com/JacobRyanHanson/budget-tracker"
        },
        {
            name: 'Weather Dashboard',
            photo: weatherDashboard,
            appLink: 'https://jacobryanhanson.github.io/weather-dashboard/',
            githubLink: "https://github.com/JacobRyanHanson/weather-dashboard"
        },
        {
            name: 'Taskmaster Pro',
            photo: taskmasterPro,
            appLink: 'https://jacobryanhanson.github.io/taskmaster-pro/',
            githubLink: "https://github.com/JacobRyanHanson/taskmaster-pro"
        },
        {
            name: 'Git It Done',
            photo: gitItDone,
            appLink: 'https://jacobryanhanson.github.io/git-it-done/',
            githubLink: "https://github.com/JacobRyanHanson/git-it-done"
        },
        {
            name: 'Run Buddy',
            photo: runBuddy,
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
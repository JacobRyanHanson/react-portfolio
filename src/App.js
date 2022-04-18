import React, { useState } from 'react';
import { validateEmail } from './utils/helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import avatar from "./assets/img/me.jpg";
import certificate from "./assets/img/full-stack-certificate.jpg"
import resume from "./assets/resume/Resume.pdf";
import hero from "./assets/img/hero.png"

function App() {
	const [categories] = useState([
		{ name: 'About' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' },
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			debugger;
			setFormState({name: e.target.name.value, email: e.target.email.value, message: e.target.message.value});
			console.log('Form', formState);
		}
		console.log('Form', formState);
	};

	const handleChange = (e) => {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`A ${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
	};

	return (
		<div className="general-background" style={{ backgroundImage: `url(${hero})` }}>
			<Header
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Header>

			<main>
				{currentCategory === categories[0] &&
					<>
						<h1 className="top-container">About</h1>
						<div className="flexbox-nowrap">
							<img src={avatar} id="avatar" alt="avatar" />
							<p className="about-text">
								I am a student attending the University of Wisconsin-Milwaukee, with a solid foundation in 
								object-oriented design and practical experience working in teams and developing websites. My 
								degree focuses on computer science with an emphasis on software engineering, supplemented by 
								my mathematics minor. I am highly motivated by my passion for innovative development and am 
								well versed in working with and adapting to emerging technologies. When working on projects, 
								I make it a point to cultivate a deeper understanding of how and why components operate before 
								analyzing functionality as a whole. In this way, I find my implementations more effective, 
								mistakes more informative, and troubleshooting more comprehensive.    
							</p>
						</div>
						<div className="flexbox-nowrap about-bottom">
							<div className="flexbox">
								<p className="about-text-sub">
									I have approximately two years of equivalent work experience in software engineering and full-stack 
									development between my education, certifications, and projects. I'm well versed in algorithm 
									optimization, data structures, memory manipulation, and web design. In addition, I have worked with 
									various technologies, including MERN, PWAs, and APIs to provide responsive and dynamic user experiences.  
								</p>
								<p className="about-text-sub">
									I effectively outlined, set goals and timeframes, delegated, and communicated to complete both Finance 
									Assistant and Game Spot Blog. I also have been recognized on several occasions by UWM for my academic 
									performance earning me a place on the Dean's List.
								</p>
							</div>

							<img src={certificate} className="full-stack-certificate" alt="full-stack-certificate" />
							
						</div>
					</>
				}

				{currentCategory === categories[1] &&
					<>
						<h1 className="top-container">Portfolio</h1>
						<Project></Project>
					</>
					
				}

				{currentCategory === categories[2] &&
					<>
						<h1 className="top-container">Contact Me</h1>
						<form id="contact-form" onSubmit={handleSubmit}>
							<div className="name-container">
								<label htmlFor="name"></label>
								<input type="text" name="name" placeholder="Name" onBlur={handleChange} />
							</div>
							<div className="email-container">
								<label htmlFor="email"></label>
								<input type="email" name="email" placeholder="Email" onBlur={handleChange} />
							</div>
							<div className="message-container">
								<label htmlFor="message"></label>
								<textarea name="message" rows="5" placeholder="Message"  className="message-box" onBlur={handleChange} />
							</div>
							{errorMessage && (
								<div>
									<p className="error-text">{errorMessage}</p>
								</div>
							)}
							<button className="submit-button" type="submit">Submit</button>
						</form>
					</>
				}

				{currentCategory === categories[3] &&
					<>
						<h1 className="top-container">Resume </h1>
						<a id="resume-link" href={resume} download>Resume Download</a>

						<h2 id="skills">Skills</h2>

						<ul id="skill-list-container">
							<li>Java</li>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Git</li>
							<li>Rest APIs</li>
							<li>Node.js</li>
							<li>SQL</li>
							<li>NoSQL</li>
							<li>PWA</li>
						</ul>
					</>
				}
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;

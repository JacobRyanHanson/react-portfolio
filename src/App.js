import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact'
import avatar from "./assets/img/me.jpg";
import certificate from "./assets/img/full-stack-certificate.jpg"
import resumeImg from "./assets/resume/Resume.png";
import resumePDF from "./assets/resume/Resume.pdf";
import hero from "./assets/img/hero.png"

function App() {
	const [categories] = useState([
		{ name: 'About' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' }
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
						<div className="about-container flexbox">
							<div className="img-container flexbox">
								<img src={avatar} className="avatar" alt="avatar" />
								<img src={certificate} className="full-stack-certificate" alt="full-stack-certificate" />
							</div>
							<div className="about-text-container flexbox">
								<p className="about-text">
									Spftware Engineer with approximately 1+ years of equivalent work experience 
									creating and executing innovative software solutions to enhance business 
									productivity. Familiar with the complete software development lifecycle (SDLC), 
									full stack (front-end/back-end) development, and aspects of machine learning. 
									Constructed a diverse collection of 30+ applications using both static and 
									dynamic languages, implementing additional frameworks to enhance design and 
									functionality.
								</p>
							</div>
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
						<Contact></Contact>
					</>
				}

				{currentCategory === categories[3] &&
					<>
						<h1 className="top-container">Resume </h1>
						<div className="resume-container flexbox">
							<a className="resume-link" href={resumePDF} download>
								<img src={resumeImg} className="resume" alt="resume" />
							</a>
						</div>
					</>
				}
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;

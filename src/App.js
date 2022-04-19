import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from './utils/helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import avatar from "./assets/img/me.jpg";
import certificate from "./assets/img/full-stack-certificate.jpg"
import resume from "./assets/resume/Resume.png";
import hero from "./assets/img/hero.png"

function App() {
	const [categories] = useState([
		{ name: 'About' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' }
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	const [formState, setFormState] = useState({
		from_name: "",
		from_email: "",
		message: ""
	});

	const [subMessage, setSubMessage] = useState('');

	const SERVICE_ID = "service_iqcfswe";
	const TEMPLATE_ID = "template_z4w3tqe";
	const PUBLIC_KEY = "HCHhYtsZXLDw5_kJR";

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formState.from_name.length && !formState.from_email.length && !formState.message.length) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
				.then((result) => {
					setSubMessage('Email sent successfully!');
				}, (error) => {
					setSubMessage('An internal error has occured. Please refresh the page and try again.');
				});
		} else {
			setSubMessage('Please fill out the entire form.');
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'from_name') {
			if (!e.target.value.length) {
				setSubMessage(`A name is required.`);
			} else {
				setSubMessage('');
				setFormState({ ...formState, from_name: e.target.value });
			}
		} else if (e.target.name === 'from_email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setSubMessage('Your email is invalid.');
			} else {
				setSubMessage('');
				setFormState({ ...formState, from_email: e.target.value });
			}
		} else {
			if (!e.target.value.length) {
				setSubMessage(`A message is required.`);
			} else {
				setSubMessage('');
				setFormState({ ...formState, message: e.target.value });
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
							{subMessage && (
								<div>
									<p className="error-text">{subMessage}</p>
								</div>
							)}
							<div className="name-container">
								<label htmlFor="name"></label>
								<input type="text" name="from_name" placeholder="Name" onChange={handleChange} />
							</div>
							<div className="email-container">
								<label htmlFor="email"></label>
								<input type="email" name="from_email" placeholder="Email" onChange={handleChange} />
							</div>
							<div className="message-container">
								<label htmlFor="message"></label>
								<textarea name="message" rows="5" placeholder="Message" className="message-box" onChange={handleChange} />
							</div>

							<button className="submit-button" type="submit">Submit</button>
						</form>
					</>
				}

				{currentCategory === categories[3] &&
					<>
						<h1 className="top-container">Resume </h1>
						<div className="flexbox resume-container">
							<a id="resume-link" href={resume} download>
								<img src={resume} className="resume" alt="resume" />
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

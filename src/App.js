import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from './utils/helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
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
		debugger;
		if (formState.from_name.length > 1 && formState.from_email.length > 1 && formState.message.length > 1) {
			setSubMessage('Sending email...');
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
						<div className="about-container flexbox">
							<div className="img-container flexbox">
								<img src={avatar} className="avatar" alt="avatar" />
								<img src={certificate} className="full-stack-certificate" alt="full-stack-certificate" />
							</div>
							<div className="about-text-container flexbox">
								<p className="about-text">
									Adaptable Computer Science major (3.94 GPA) currently attending the University of Wisconsin-Milwaukee,
									with ~2 years of equivalent work experience. Aiming to leverage a proven knowledge of web development,
									data structures, and algorithms to successfully fill the software engineer intern role at your company.
									Frequently praised as detail-oriented by my peers and recognized for my passion in problem-solving, I
									can be relied upon to help your company achieve its goals.
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
						<div className="contact-form-container">
							<form className="contact-form" onSubmit={handleSubmit}>
								{subMessage && (
									<div>
										<p className="sub-text">{subMessage}</p>
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
						</div>
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

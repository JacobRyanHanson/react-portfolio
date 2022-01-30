import React, { useState } from 'react';
import { validateEmail } from './utils/helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import avatar from "./assets/img/avatar.jpg";
import resume from "./assets/resume/Resume.pdf";

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
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			setFormState({ [e.target.name]: e.target.value });
			console.log('Form', formState);
		}
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
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
	};

	return (
		<div>
			<Header
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Header>

			<main>
				{currentCategory === categories[0] &&
					<>
						<h1 id="about-me">About Me</h1>
						<img src={avatar} id="avatar" alt="avatar" />
						<p className="about-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus in nisl pellentesque
							eleifend sed in ligula. Nulla placerat in lacus in commodo. Vivamus viverra leo tristique metus
							pulvinar tincidunt. Integer sit amet velit orci. Quisque nec lacinia ligula, vitae eleifend elit.
							Aliquam pretium sodales elit. Sed bibendum ultricies aliquam. Suspendisse potenti.
						</p>
						<p className="about-text">
							Nam in sollicitudin ligula. Proin eget nisi porttitor, tincidunt nisi ut, mattis sapien.
							Donec libero magna, lobortis quis nibh ut, dictum aliquam lacus. Morbi congue fermentum
							sem eu sodales. Donec a lorem et velit laoreet facilisis quis non neque. Fusce ante risus,
							posuere porttitor vestibulum sed, varius in lectus. Mauris faucibus et ex id maximus.
							Sed sed odio semper, pulvinar lectus ut, elementum nisl. Pellentesque habitant morbi
							tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vulputate sodales
							metus, a ornare tortor maximus vel. Aliquam at nisl tellus. Sed a finibus nisl. Vestibulum
							ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
							vel malesuada ante. Vestibulum pharetra sagittis tortor sed malesuada.
						</p>
						<p className="about-text">
							Maecenas orci odio, pulvinar vitae vehicula a, hendrerit at ipsum. Cras ut felis ac tellus
							semper consequat at nec metus. Nulla commodo tincidunt sem sit amet tempor. Vestibulum nec
							tellus vitae massa condimentum porttitor. Morbi sapien nibh, aliquam et condimentum in,
							tincidunt in nisl. Fusce metus ex, pretium sed fermentum sed, ultrices vel nulla. Curabitur
							eget suscipit justo, a mattis ligula. Sed massa tortor, egestas nec metus at, aliquam blandit
							lacus. Ut mollis a odio quis volutpat. Sed nec tortor nec ex volutpat dapibus sit amet ac odio.
							Donec accumsan interdum nisl quis eleifend. Cras varius diam ac nisl luctus sagittis. Pellentesque
							a posuere lacus. Sed interdum rutrum risus, bibendum dictum libero faucibus eget. Nam
							pellentesque, massa a sollicitudin gravida, massa eros mollis augue, nec dapibus augue nisi
							at sapien. Nullam id urna ac dolor tristique dignissim.
						</p>
					</>
				}

				{currentCategory === categories[1] &&
					<Project></Project>
				}

				{currentCategory === categories[2] &&
					<>
						<h1 id="contact-form-title">Contact Me</h1>
						<form id="contact-form" onSubmit={handleSubmit}>
							<div className="name-container">
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" defaultValue={name} onBlur={handleChange} />
							</div>
							<div className="email-container">
								<label htmlFor="email">Email Address:</label>
								<input type="email" name="email" defaultValue={email} onBlur={handleChange} />
							</div>
							<div className="message-container">
								<label htmlFor="message">Message:</label>
								<textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
							</div>
							{errorMessage && (
								<div>
									<p className="error-text">{errorMessage}</p>
								</div>
							)}
							<button type="submit">Submit</button>
						</form>
					</>
				}

				{currentCategory === categories[3] &&
					<>
						<h1 id="resume">Resume </h1>
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

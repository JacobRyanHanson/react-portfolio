import React, { useState } from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
	const [categories] = useState([
		{ name: 'About Me', description: '' },
		{ name: 'Portfolio', description: '' },
		{ name: 'Contact', description: '' },
		{ name: 'Resume', description: '' },
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<div>
			<Header
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
			></Header>

			<main>
				{currentCategory === categories[0] && <h1>Type1: </h1>}
				{currentCategory === categories[1] && <h1>Type2: </h1>}
				{currentCategory === categories[2] && <h1>Type3: </h1>}
				{currentCategory === categories[3] && <h1>Type4: </h1>}
			</main>

			{/* <Footer>

			</Footer> */}
		</div>
	);
}

export default App;

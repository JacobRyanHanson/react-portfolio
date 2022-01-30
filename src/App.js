import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import avatar from "./assets/img/avatar.jpg";

function App() {
	const [categories] = useState([
		{ name: 'About Me' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' },
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
				{currentCategory === categories[0] &&
					<>
						<h1 id="about-me">About me</h1>
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
					<>
						<h1>Type2: </h1>
					</>
				}

				{currentCategory === categories[2] &&
					<>
						<h1>Type3: </h1>
					</>
				}

				{currentCategory === categories[3] &&
					<>
						<h1>Type4: </h1>
					</>
				}
			</main>

			<Footer></Footer>
		</div>
	);
}

export default App;

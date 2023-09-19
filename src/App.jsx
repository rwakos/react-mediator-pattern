import React, { useState } from 'react';
import CreateFruit from './components/fruit/CreateFruit';
import ListFruit from './components/fruit/ListFuit';
import { fruits } from './data/fruits';
import styles from './app.module.css';

const App = () => {
	const [list, setList] = useState(fruits);

	return (
		<div className={`p-2 ${styles.app}`}>
			<section className="hero is-info p-3">
				<div className="hero-body">
					<p className="title">Mediator pattern using React</p>
					<p className="subtitle">Communications between components</p>
				</div>
			</section>

			<CreateFruit setList={setList} list={list} />
			<ListFruit setList={setList} list={list} />
		</div>
	);
};

export default App;

import React, { useState } from 'react';

const CreateFruit = ({ setList, list }) => {
	const [newFruit, setNewFruit] = useState('');
	const disabled = newFruit.trim() === '' ? true : false;

	const handleSubmit = () => {
		setList([...list, newFruit]);
		setNewFruit('');
	};

	return (
		<div className="container mt-5">
			<div className="field is-grouped">
				<p className="control is-expanded">
					<input
						className="input"
						type="text"
						placeholder="Create fruit"
						value={newFruit}
						onChange={(e) => setNewFruit(e.target.value)}
					/>
				</p>
				<p className="control">
					<button className="button is-info" disabled={disabled} onClick={handleSubmit}>
						Create
					</button>
				</p>
			</div>
		</div>
	);
};

export default CreateFruit;

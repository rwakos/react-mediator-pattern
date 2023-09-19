import React from 'react';
import styles from './fruit.module.css';

const ListFruit = ({ list, setList }) => {
	const removeItem = (item) => {
		const newList = list.filter((x) => x !== item);
		setList(newList);
	};

	const availableFruits = <div className="notification is-primary">Available fruits</div>;
	const notAvailable = <div className="notification is-danger">No fruits at the moment</div>;

	const transformIntoRows = () => {
		return list.map((item) => {
			return (
				<div className={`columns ${styles.noMarginBottom} ${styles.fruitColumns}  mt-2`} key={item}>
					<div className={`column is-four-fifths ${styles.fruitColumnText}`}>{item}</div>
					<div className={`column ${styles.fruitColumnButton} ${styles.textAlignRight}`}>
						<button className="button is-danger" onClick={() => removeItem(item)}>
							Remove
						</button>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="container mt-3">
			{list.length > 0 ? availableFruits : notAvailable}
			<div className="container">{transformIntoRows()}</div>
		</div>
	);
};

export default ListFruit;

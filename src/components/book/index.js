import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Book = ({ book }) => {
	return (
		<div>
			<Link to={`/BookDescription/${book.id}`}>
				<p>{book.volumeInfo.title}</p>
			</Link>
		</div>
	);
};

export default Book;

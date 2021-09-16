import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header';
import Book from '../book';
import './style.scss';

const SearchReuslts = () => {
	const [books, setBooks] = useState([]);

	const location = useLocation();

	useEffect(() => {
		setBooks(location.state.books);
	}, [location]);

	return (
		<div>
			<Header />
			{books.map((book) => (
				<Book book={book} key={book.id} />
			))}
		</div>
	);
};

export default SearchReuslts;

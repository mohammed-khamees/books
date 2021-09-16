import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../search';
import Book from '../book';
import './style.scss';

const Landing = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks();
	}, []);

	const getBooks = async () => {
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=inauthor:keyes&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
			);

			setBooks(res.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Search />
			{books.map((book) => (
				<Book book={book} key={book.id} />
			))}
		</div>
	);
};

export default Landing;

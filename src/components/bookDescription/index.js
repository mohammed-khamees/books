import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// components
import Header from '../header';

const BookDescription = () => {
	const [book, setBook] = useState({});

	let { volumeId } = useParams();

	useEffect(() => {
		getBook();
		// eslint-disable-next-line
	}, []);

	const getBook = async () => {
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${process.env.REACT_APP_API_KEY}`,
			);

			setBook(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Header />
			<h1>{book.volumeInfo?.title}</h1>
			<p dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }} />
			<img src={book.volumeInfo?.imageLinks.thumbnail} alt="bookImg" />
		</div>
	);
};

export default BookDescription;

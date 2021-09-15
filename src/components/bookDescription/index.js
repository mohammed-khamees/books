import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const API_KEY = 'AIzaSyDX7JvvMomq208XYnuKluSc6wj6hKsXVOI';

const BookDescription = () => {
	let { volumeId } = useParams();

	const [book, setBook] = useState({});

	useEffect(() => {
		getBook();
	}, []);

	const getBook = async () => {
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${API_KEY}`,
			);

			console.log(res.data);

			setBook(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>{book.volumeInfo?.title}</h1>
			<p>{book.volumeInfo?.description}</p>
			<img src={book.volumeInfo?.imageLinks.thumbnail} alt="bookImg" />
		</div>
	);
};

export default BookDescription;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

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

			console.log(res.data);
			setBook(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Header />
			<div className="container">
				<h1 className="title">{book.volumeInfo?.title}</h1>
				<h2 className="subtitle">{book.volumeInfo?.subtitle}</h2>
				<div className="infoContainer">
					<img
						className="thumbnail"
						src={book.volumeInfo?.imageLinks.thumbnail}
						alt="bookImg"
					/>
					<div className="infos">
						<h1>
							Authors:
							{book.volumeInfo?.authors
								? book.volumeInfo.authors.join(' ,')
								: 'Authors Unknown'}
						</h1>
						<h1>Published At: {book.volumeInfo?.publishedDate}</h1>
						<h1>Publisher: {book.volumeInfo?.publisher}</h1>
						<h1>Pages: {book.volumeInfo?.printedPageCount} pages</h1>
					</div>
				</div>
				<p
					className="desc"
					dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }}
				/>
			</div>
		</div>
	);
};

export default BookDescription;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
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
					{book.volumeInfo?.imageLinks ? (
						<img
							className="thumbnail"
							src={book.volumeInfo?.imageLinks?.thumbnail}
							alt={book.volumeInfo?.title}
						/>
					) : (
						<img
							className="thumbnail"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
							alt={book.volumeInfo?.title}
						/>
					)}
					<div className="infos">
						<h1>
							Authors:{' '}
							{book.volumeInfo?.authors
								? book.volumeInfo.authors.join(' ,')
								: 'Authors Unknown'}
						</h1>
						<h1>Published At: {book.volumeInfo?.publishedDate}</h1>
						<h1>Publisher: {book.volumeInfo?.publisher}</h1>
						<h1>Pages: {book.volumeInfo?.printedPageCount} pages</h1>
						<h2>
							{book.volumeInfo?.averageRating ? (
								<Box
									sx={{
										width: 200,
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Rating
										value={Number(book.volumeInfo?.averageRating)}
										readOnly
										precision={0.1}
										size="large"
										max={5}
										emptyIcon={
											<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
										}
									/>
									<Box sx={{ ml: 2 }}>{book.volumeInfo?.averageRating}</Box>
								</Box>
							) : (
								'No Rating'
							)}
						</h2>
						<h2 style={{ color: '#aaa' }}>
							{book.saleInfo?.listPrice?.amount}{' '}
							{book.saleInfo?.listPrice?.currencyCode}
						</h2>
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

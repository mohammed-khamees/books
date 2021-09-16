import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Book = ({ book }) => {
	return (
		<div>
			<Link to={`/BookDescription/${book.id}`}>
				{book.volumeInfo.imageLinks ? (
					<img src={book.volumeInfo.imageLinks.thumbnail} alt="bookImg" />
				) : (
					<img
						src="https://lh3.googleusercontent.com/proxy/8cQDCE_3GS3Fw65vq5gxpbpExPiUgq0BJhbs5HQtWZqb1B88oacV3UOkUadXsPvA6Lau9QpeIk0PYbdD0B_ciVMfu7U"
						alt="bookImg"
					/>
				)}
				<p>{book.volumeInfo.title}</p>
			</Link>
		</div>
	);
};

export default Book;

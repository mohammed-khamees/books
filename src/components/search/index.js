import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchBooks, setSearchBooks] = useState([]);

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
			);

			// console.log(res.data.items);

			// setSearchBooks(res.data.items);
			history.push('/searchResults', { books: res.data.items });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="Find your favorite book..."
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				<button onClick={handleSubmit}>search</button>
			</form>
		</div>
	);
};

export default Search;

import React from 'react';
import axios from 'axios';
import './style.scss';

const Search = () => {
	return (
		<div>
			<form>
				<input type="text" placeholder="Find your favorite book..." />
				<input type="submit" value="search" />
			</form>
		</div>
	);
};

export default Search;

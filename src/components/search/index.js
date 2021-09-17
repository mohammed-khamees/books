import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const history = useHistory();
	const classes = useStyles();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
			);

			history.push('/searchResults', {
				books: res.data.items,
				searchQuery: searchQuery,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Find your favorite book..."
				onChange={(e) => setSearchQuery(e.target.value)}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
				onClick={handleSubmit}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default Search;

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		width: '25%',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 3,
	},
}));

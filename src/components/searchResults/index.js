import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components
import Header from '../header';
import Book from '../book';

const SearchReuslts = () => {
	const [books, setBooks] = useState([]);

	const location = useLocation();
	const classes = useStyles();

	useEffect(() => {
		setBooks(location.state.books);
	}, [location]);

	return (
		<div className={classes.root}>
			<Header />
			<Grid container spacing={4}>
				{books.map((book) => (
					<Grid item xs={'true'} xl={2}>
						<Book book={book} key={book.id} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default SearchReuslts;

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 70,
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

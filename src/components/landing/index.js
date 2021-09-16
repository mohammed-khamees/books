import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components
import Book from '../book';
import Header from '../header';

const Landing = () => {
	const [books, setBooks] = useState([]);

	const classes = useStyles();

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

export default Landing;

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

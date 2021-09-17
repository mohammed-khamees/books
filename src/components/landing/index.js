import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Button, Box } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';

// components
import Book from '../book';
import Header from '../header';

const Landing = () => {
	const [books, setBooks] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const [sort, setSort] = useState('intitle');

	const classes = useStyles();

	useEffect(() => {
		getBooks();
		// eslint-disable-next-line
	}, []);

	const getBooks = async (sort) => {
		setLoading(true);
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${sort}:keyes&maxResults=40&key=${process.env.REACT_APP_API_KEY}`,
			);

			setLoading(false);
			setStartIndex(startIndex + 40);
			setBooks(res.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	const moreBooks = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=:keyes&maxResults=10&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`,
			);

			setLoading(false);
			setStartIndex(startIndex + 10);
			setBooks([...books, ...res.data.items]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={classes.root}>
			<Header />

			<Stack direction="row" spacing={1} style={{ marginBottom: 20 }}>
				<Chip
					label="By Title"
					color="primary"
					variant={sort === 'intitle' && 'outlined'}
					onClick={() => {
						setSort('intitle');
						getBooks('intitle');
					}}
				/>
				<Chip
					label="By Author"
					color="primary"
					variant={sort === 'inauthor' && 'outlined'}
					onClick={() => {
						setSort('inauthor');
						getBooks('inauthor');
					}}
				/>
			</Stack>

			<Grid container spacing={4}>
				{books.map((book, index) => (
					<Grid item xs="true" xl={2} key={index}>
						<Book book={book} />
					</Grid>
				))}
			</Grid>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: 30,
					zIndex: 5,
				}}
			>
				{loading ? (
					<Box sx={{ display: 'flex' }}>
						<CircularProgress />
					</Box>
				) : (
					<Button variant="contained" onClick={moreBooks} color="primary">
						Show More
					</Button>
				)}
			</div>
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

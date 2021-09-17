import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Book = ({ book }) => {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = (bookId) => {
		history.push(`/BookDescription/${bookId}`);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea onClick={() => handleClick(book.id)}>
				{book.volumeInfo.imageLinks ? (
					<CardMedia
						className={classes.media}
						alt={book.volumeInfo.title}
						image={book.volumeInfo.imageLinks.thumbnail}
						title={book.volumeInfo.title}
					/>
				) : (
					<CardMedia
						className={classes.media}
						alt={book.volumeInfo.title}
						image="https://lh3.googleusercontent.com/proxy/8cQDCE_3GS3Fw65vq5gxpbpExPiUgq0BJhbs5HQtWZqb1B88oacV3UOkUadXsPvA6Lau9QpeIk0PYbdD0B_ciVMfu7U"
						title={book.volumeInfo.title}
					/>
				)}

				<CardContent>
					<Typography gutterBottom variant="h5" noWrap component="h2">
						{book.volumeInfo.title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						noWrap
						component="p"
					>
						{book.volumeInfo.authors
							? book.volumeInfo.authors.join(' ')
							: 'Authors Unknown'}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="medium"
					color="primary"
					onClick={() => handleClick(book.id)}
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Book;

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	IconButton,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

// components
import Search from '../search';

const Header = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
			>
				<Toolbar className={classes.Toolbar}>
					<Typography variant="h5" noWrap>
						Books
					</Typography>
					<Search />
					<IconButton
						color="inherit"
						aria-label="back to Home page"
						onClick={() => history.push('/')}
					>
						<HomeIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: 70,
	},
	Toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

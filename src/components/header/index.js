import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	List,
	Typography,
	Divider,
	IconButton,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';

// components
import Search from '../search';

const drawerWidth = 240;

const Header = () => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar className={classes.Toolbar}>
					<Typography variant="h5" noWrap>
						Books
					</Typography>
					<Search />
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerToggle}
					>
						<MenuIcon className={clsx(open && classes.hide)} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerToggle}>
						{theme.direction === 'rtl' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem
						button
						onClick={() => {
							history.push('/');
							handleDrawerToggle();
						}}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
};

export default Header;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: 70,
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	},
	Toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},

	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-start',
	},
}));

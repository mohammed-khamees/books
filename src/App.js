import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing';
import BookDescription from './components/bookDescription';
import SearchReuslts from './components/searchResults';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Route exact path="/" component={Landing} />
			<Route
				exact
				path="/BookDescription/:volumeId"
				component={BookDescription}
			/>
			<Route exact path="/searchResults" component={SearchReuslts} />
		</div>
	);
};

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing';
import BookDescription from './components/bookDescription';
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
		</div>
	);
};

export default App;

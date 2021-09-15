import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/landing';
import BookDescription from './components/bookDescription';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Route path="/" component={Landing} />
			<Route path="/BookDescription" component={BookDescription} />
		</div>
	);
};

export default App;

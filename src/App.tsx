import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import './css/main.css';

const App: React.FunctionComponent = props => {
	return (
		<>
			<Nav />
			<Home />
		</>
	);
};

export default App;

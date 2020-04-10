import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './css/main.css';

const App: React.FunctionComponent = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;

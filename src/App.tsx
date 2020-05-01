import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './store';
import './css/main.css';

ReactGA.initialize('UA-165289420-1');
ReactGA.pageview('/');

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

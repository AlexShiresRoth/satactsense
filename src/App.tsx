import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './store';
import './css/main.css';
import Landing from './components/pages/Landing';
import APPage from './components/pages/APPage';
import GeneralPage from './components/pages/GeneralPage';
import SatPage from './components/pages/SatPage';
import ActPage from './components/pages/ActPage';
import HopkinsPage from './components/pages/HopkinsPage';
import SatTwoPage from './components/pages/SatTwoPage';
import PsatPlanPage from './components/pages/PsatPlanPage';
import CollegeConsultingPage from './components/pages/CollegeConsultingPage';
import SatAndActPage from './components/pages/SatAndActPage';

ReactGA.initialize('UA-165289420-1');
ReactGA.pageview('/');
ReactGA.pageview('/landing');

const App: React.FunctionComponent = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/landing" component={Landing} />
					<Route exact path="/ap" component={APPage} />
					<Route exact path="/general" component={GeneralPage} />
					<Route exact path="/sat" component={SatPage} />
					<Route exact path="/act" component={ActPage} />
					<Route exact path="/johnshopkins" component={HopkinsPage} />
					<Route exact path="/sattwo" component={SatTwoPage} />
					<Route exact path="/psatandplan" component={PsatPlanPage} />
					<Route exact path="/collegeconsulting" component={CollegeConsultingPage} />
					<Route exact path="/satandact" component={SatAndActPage} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;

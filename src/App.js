import React, { Component } from 'react';
import Axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import './style.css'
import StarshipPage from './components/Starships/StarshipPage';

class App extends Component {
	state = {
		starships: [],
		loading: true
	}

	async componentDidMount() {
		if (!this.state.starships || !this.state.starships.length) {
			const response = await Axios.get('https://swapi.dev/api/starships');;
			const { results } = response.data;
			this.setState({ starships: results, loading: false });
		}
	}

	render() {
		const { loading, starships } = this.state;

		return (
  	  <div>
				<header>STAR WARS STARSHIPS</header>
				<Switch>
					<Route path='/starship' render={({ location }) => <StarshipPage
						loading={loading}
						location={location}
					/>} />
					<Route
						exact
						path='/'
						render={() => {
							console.log('hello')
							return <Home loading={loading} starships={starships} />
						}}
					/>
				</Switch>
  	  </div>
		);
	}
}

export default App;
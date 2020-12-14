import React from 'react';
import { Link } from 'react-router-dom';

import PilotList from '../Pilots/PilotList';

function StarshipPage(props) {
	const { name, model, pilots } = props.location.state;

	return (
		<div className="shipDiv">
			<p>NAME: {name}</p>
			<p>MODEL: {model}</p>
			<PilotList pilots={pilots} />
			<Link to='/' className="returnBtn">RETURN HOME</Link>
		</div>
	);
}

export default StarshipPage;

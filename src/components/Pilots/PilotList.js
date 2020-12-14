import React from 'react';
import Pilot from './Pilot';

function PilotList({ pilots }) {
	let pilotList = <h3>No pilots found</h3>;

	if (pilots && pilots.length) {
		pilotList = pilots.map(pilot => <Pilot key={pilot} pilotUrl={pilot} />);
	}

	return (
		<div>
			{pilotList}
		</div>
	);
}

export default PilotList;

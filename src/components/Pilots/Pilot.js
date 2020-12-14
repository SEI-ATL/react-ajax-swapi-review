import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import Spinner from '../UI/Spinner';

function Pilot(props) {
	const [pilot, setPilot] = useState({});

	useEffect(() => {
		async function fetchData() {
			const response = await Axios.get(props.pilotUrl);
			setPilot(response);
		}

		fetchData();
	}, [props.pilotUrl]);

	let pilotInfo = <Spinner />;

	if (pilot.data) {
		pilotInfo = <p>{pilot.data.name}</p>;
	}
	return (
		<div>
			{pilotInfo}
		</div>
	);
}

export default Pilot;

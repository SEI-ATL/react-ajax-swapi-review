import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from './UI/Spinner';

function Home(props) {
	const { starships } = props;

	// handles empty starhips array
	let twinkleVessels = <Spinner />;

	// set mapped starships array to a conditional variable
	if (starships.length) {
		twinkleVessels = starships.map(starship => {
			return <Link to={{ pathname: '/starship', state: starship }}
				key={starship.name}
				className='starshipBtn'>
				{starship.name}
			</Link>
		});
	}

	return (
		<div className="starshipsDiv">
			{twinkleVessels}
		</div>
	);
}

export default Home;

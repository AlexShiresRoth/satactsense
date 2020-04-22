import React, { useState } from 'react';
import bioStyle from './Bio.module.scss';
import { content } from './bioContent';

const Bio = () => {
	const [reduced, setSize] = useState(true);

	return (
		<section className={bioStyle.section}>
			<div className={bioStyle.container}>
				<div className={bioStyle.heading}>
					<h2>About SATACTSENSE</h2>
				</div>
				<div className={reduced ? bioStyle.copy_reduced : bioStyle.copy}>
					{content.slice(0, reduced ? 2 : content.length).map((item, i) => {
						return <p key={i}>{item.par}</p>;
					})}
				</div>
				<div className={bioStyle.copy_button_container}>
					<span></span>
					<button onClick={() => setSize(!reduced)}>{reduced ? 'Read More' : 'Show Less'}</button>
					<span></span>
				</div>
			</div>
		</section>
	);
};

export default Bio;

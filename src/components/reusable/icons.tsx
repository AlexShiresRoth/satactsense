import React from 'react';
import { TiSocialSkype, TiSocialFacebookCircular } from 'react-icons/ti';

export const zoomLogo = (
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/85px-Zoom_Communications_Logo.svg.png"
		alt="zoom logo"
	/>
);

export const socialIcons = (
	<>
		<a
			href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
			target="_blank"
			rel="noopener noreferrer"
		>
			<TiSocialFacebookCircular />
		</a>
		<a
			href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
			target="_blank"
			rel="noopener noreferrer"
		>
			<TiSocialSkype />
		</a>
		<a
			href="https://www.facebook.com/SATACT-Sense-Making-sense-of-the-SAT-ACT-219579154045/?__tn__=%2Cd%2CP-R&eid=ARBgrhXPMFtOsJ5wtl9wmSERTEtfNfvxAXDC8eW9GE1M3Rrfee-7HAnYBaiO8ZXEZtK1QFYSxv1WlBSP"
			target="_blank"
			rel="noopener noreferrer"
		>
			{zoomLogo}
		</a>
	</>
);

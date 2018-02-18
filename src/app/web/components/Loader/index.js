import React from 'react';

import Styles from './styles.scss';

const Loader = props => {
	return (
		<div className="loader-container">
			<div className="signal outer" />
			<div className="signal inner" />
			<div className="signal inner-most" />
		</div>
	);
};

export default Loader;
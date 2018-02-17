import React from 'react';

import Styles from './styles.scss';

const Advertisement = props => {
	return (
		<div className="ad-container">
			<div style={{ backgroundImage: `url(${props.image})` }} className="image"></div>
			<div className="info">
				<div className="title">{props.title}</div>

				<div className="addr">{( props.showAddress ? props.address : "N/A" )}</div>

				<div className="last-section">
					<span>
						<span className="price">{props.price} €</span>
					</span>

					<span>
						<span className="rooms">{props.numberOfRooms} Zimmer</span>
						<span className="area">ab {props.space} m<sup>2</sup></span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
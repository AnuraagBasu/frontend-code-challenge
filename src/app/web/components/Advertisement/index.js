import React from 'react';

import Styles from './styles.scss';

const Advertisement = props => {
	return (
		<div className="ad-container shadow">
			<div style={{ backgroundImage: `url(${props.image})` }} className="image"></div>

			<div className="info">
				<div className="bold-text title">{props.title}</div>

				<div className=" bold-text addr single-line-ellipsis">{props.address}</div>

				<div className="last-section">
					<span>
						<span className="bold-text price">{props.price}</span>
					</span>

					<span className="regular-text">
						<span className="rooms">{props.numberOfRooms} Zimmer</span>
						<span className="area">ab {props.space} m<sup>2</sup></span>
					</span>
				</div>
			</div>

			<div className="bold-text purpose shadow">{( props.purpose == 1 ? 'Kaufen' : 'Mieten' )}</div>
		</div>
	);
};

Advertisement.defaultProps = {
	image: "http://www.joepperezassociates.com/House.jpg"
}

export default Advertisement;
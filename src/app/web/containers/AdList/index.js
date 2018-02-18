import React, { Component } from 'react';
import Advertisement from '../../components/Advertisement';

import { formatCurrency } from '../../../core/lib/utils';

import Styles from './styles.scss';

export default class AdList extends Component {
	constructor( props ) {
		super( props );
	}

	getAdsToShow() {
		return this.props.adsToShow.map( advertisement => {
			let image = advertisement.advertisementAssets.advertisementThumbnails.inventory_m.url;
			if ( !image ) {
				let titlePictures = Object.values( advertisement.advertisementAssets ).filter( asset => {
					if ( asset.titlePicture ) {
						return true;
					}
				} );

				image = titlePictures[ 0 ] && titlePictures[ 0 ].advertisementThumbnails.inventory_m.url;
			}

			let address;
			if ( advertisement.userWishes.visibleAddress ) {
				let addrObj = advertisement.realestateSummary.address;
				address = addrObj.postalCode + " " + addrObj.street + " / " + addrObj.city;
			}

			let price = advertisement.advertisementPrice.sellPrice;
			if ( ( advertisement.purpose == 0 ) || !price ) {
				price = advertisement.advertisementPrice.baseRent;
			}

			price = formatCurrency( price );

			return (
				<Advertisement key={advertisement._id.$id}
					image={image} address={address} price={price}
					title={advertisement.title}
					purpose={advertisement.purpose}
					numberOfRooms={advertisement.realestateSummary.numberOfRooms}
					space={Math.floor( advertisement.realestateSummary.space )} />
			);
		} );
	}

	render() {
		return (
			<div className="ad-list-container">
				{this.getAdsToShow()}
			</div>
		);
	}
}
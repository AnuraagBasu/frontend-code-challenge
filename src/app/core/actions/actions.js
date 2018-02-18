import * as types from './types';
import { URLs } from '../config/urls';

export function getAdvertisements() {
	return ( dispatch, getState ) => {
		fetch( URLs.getAdvertisements() )
			.then( resp => resp.json() )
			.then( resp => {
				if ( resp && resp.data ) {
					let startingIndex = Math.floor( Math.random() * ( ( resp.data.length - 10 ) - 0 + 1 ) );
					startingIndex = 0;
					dispatch( setAdvertisements( resp.data.slice( startingIndex, startingIndex + 10 ) ) );
				}
			} )
			.catch( err => {
				// handle error
				console.error( "error in fetching advertisements", JSON.stringify( err ) );
			} );
	};
}

function setAdvertisements( advertisements ) {
	return {
		type: types.SET_ADV_LIST,
		payload: {
			advertisements
		}
	};
}
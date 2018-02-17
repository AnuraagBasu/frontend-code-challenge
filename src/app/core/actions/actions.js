import * as types from './types';
import { URLs } from '../config/urls';

export function getAdvertisements() {
	return ( dispatch, getState ) => {
		fetch( URLs.getAdvertisements() )
			.then( resp => resp.json() )
			.then( resp => {
				if ( resp && resp.data ) {
					dispatch( setAdvertisements( resp.data.slice( 0, 10 ) ) );
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
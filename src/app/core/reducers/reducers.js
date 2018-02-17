import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const advertisements = createReducer( {}, {
	[ types.SET_ADV_LIST ]( state, action ) {
		return action.payload.advertisements;
	}
} );
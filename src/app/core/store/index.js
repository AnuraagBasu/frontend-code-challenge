import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

function getStore( initialState ) {
	let isDevMode = true;
	if ( process.env.NODE_ENV == 'production' ) {
		isDevMode = false;
	}

	const loggerMiddleware = createLogger( { predicate: ( getState, actions ) => isDevMode } );

	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);

	return createStore( reducer, initialState, enhancer );
}

const initialState = {
	advertisements: []
};

export default getStore( initialState );
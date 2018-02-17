import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from '../core/store';
import Root from './containers/Root';

render( (
	<Provider store={store}>
		<Root />
	</Provider> ), document.getElementById( 'app' ) );
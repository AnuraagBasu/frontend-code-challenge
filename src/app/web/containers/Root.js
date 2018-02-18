import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../core/actions';

import AdList from './AdList';
import Loader from '../components/Loader';

import BaseStyles from '../styles/base.scss';

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		this.props.getAdvertisements();
	}

	render() {
		let content;
		if ( this.props.advertisements.length ) {
			content = (
				<AdList adsToShow={this.props.advertisements} />
			);
		} else {
			content = (
				<Loader />
			);
		}

		return (
			<div className="page-container">
				{content}
			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		advertisements: state.advertisements
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );
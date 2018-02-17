import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../core/actions';

class Root extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <span>React with Redux</span>
            </div>
        );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );
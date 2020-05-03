import React from 'react';
import Albums from './components/Albums';
import Album from './components/Album';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

import { connect } from 'react-redux';

function App(props) {
	return (
		<div>
			<CssBaseline />
			<Header />
      {(props.state.isEditing) ? (<Album/>) : (<Albums/>)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		state,
	};
};

export default connect(mapStateToProps)(App);

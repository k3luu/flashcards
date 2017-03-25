import React from 'react';
import { connect } from 'react-redux';

import Toolbar from './Toolbar';
import Sidebar from './Sidebar';

// react-router and react-router-redux gives us a second param 
// that comes from <Route> in /src/app.js
// for now, just interested in the deckId token
const mapStateToProps = (props, { params: { deckId } }) => ({
	deckId
});

// deckId is coming from /src/app.js when we route
// to use deckId, need to pass into component as a param
const App = ({ deckId, children }) => {
  return (<div className='app'>
  		<Toolbar deckId={deckId} />
  		<Sidebar />
    	{children}
  </div>);
};

//export default App;

export default connect(mapStateToProps)(App);
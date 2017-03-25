import React from 'react';
import { showAddDeck } from '../actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({ deckId, showAddDeck }) => {

	let deckTools = deckId ? (<div>
		<Link className='btn' to={`/deck/${deckId}/new`}> New Card </Link>
		<Link className='btn' to={`/deck/${deckId}/study`}> Study Deck </Link>
	</div>) : null;

	return(<div className='toolbar'>
		<div>
			<button onClick={showAddDeck}> New Deck </button>
		</div>
		{deckTools}
	</div>);
};

export default connect(null, mapDispatchToProps)(Toolbar);

// REVIEW:
// - deckId is a property getting pulled from App.js when we render Toolbar
// - showAddDeck is the action we are reading from our store and we can execute
// 	by importing the action creator from ../actions.js
// - if we are routing/viewing a specific deck, display buttons (deckTools) unique to viewing a deck
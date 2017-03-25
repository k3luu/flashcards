import React from 'react';
import ReactDOM from 'react-dom';
// connect - func that defines what props we want container component to have
//  - apply it to presentational component (Sidebar in this case) and get complete react component
import {connect} from 'react-redux';
import { Link } from 'react-router';

import { addDeck, showAddDeck, hideAddDeck } from '../actions';

// Data previously passed into <Sidebar/> manually
// Should create functions to map state and actions to properties instead
            // decks={state.decks} 
            // addingDeck={state.addingDeck}

            // FUNCTIONS TO CALL TO DO ACTIONS AND CHANGE STATE
            // addDeck={name => store.dispatch(addDeck(name))}
            // showAddDeck={() => store.dispatch(showAddDeck())}
            // hideAddDeck={() => store.dispatch(hideAddDeck())}

// const mapStateToProps = (state) => {
//     return {
//         decks: state.decks,
//         addingDeck: state.addingDeck,
//     };
// };
// shorthand for above
const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck,
});

const mapDispatchToProps = dispatch => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

// made a Sidebar React component so we can use life cycle methods: componentDidUpdate()
const Sidebar = React.createClass({
    componentDidUpdate() {
        // when show_add_deck/input field is true, focus on input field
        var el = ReactDOM.findDOMNode(this.refs.add);
        if(el) el.focus()
    },
    render() {
        let props = this.props;

        // props are coming in from 'connecting' this presentational component with /src/app.js
        // notice how we didnt have to pass the store from /src/components/App.js and then to Sidebar
        // Provider(app.js) made the store accessible to Sidebar without a middle man necessary

        return(<div className='sidebar'>
            <h2>All decks</h2>

            <ul>
            {props.decks.map((deck, i) =>
                <li key={i}>
                    <Link to={`/deck/${deck.id}`}> {deck.name} </Link>
                </li>
            )}
            </ul>

            {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} /> }
        </div>);
    },
    createDeck(evt) {
        if(evt.which !== 13) return;

        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});

//export default Sidebar;   <-- dont need to use this anymore, use 'connect' to make complete React component

//connect() takes in the mapping functions as params 
//and calls another function which takes in the presentational component (Sidebar)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
//RESULT: exports a container component













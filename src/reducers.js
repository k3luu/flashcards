// state tree:
// 
// cards [] - better to have deckId instead of having cards nested in decks
// decks []
// selectedDeck: 123
// studyMode: true/false
// ------- REDUCERS ----------

// manages the cards[] in the state tree (above)
export const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign( {}, action.data, {
            	score: 1,
                id: +new Date
            });

            // add new card to the cards[], no need to return an object
            // state is the cards[] property
            return state.concat([newCard]);

        default:
        	//if not adding card, return cards[] as is or an empty []
            return state || [];
    }
};

// manages whenever adding a deck to decks[]
export const decks = (state, action) => {
    switch(action.type) {
        case 'ADD_DECK':
            let newDeck = { name: action.data, id: +new Date };
            return state.concat([newDeck]);

        default:
            return state || [];
    }
}

// manages visibility of 'adding a deck'
export const addingDeck = (state, action) => {
    switch(action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        //default: return state || false;
        default: return !!state;
    }
};

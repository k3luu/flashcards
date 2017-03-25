// Actions: ADD_DECK, SHOW_ADD_DECK, HIDE_ADD_DECK
// - in redux, make action-creator methods to return the action
// - will be read by the respective reducers
// ------- ACTIONS ----------
export const addDeck = name => ({
    type: 'ADD_DECK',
    data: name
});

export const showAddDeck = () => ({
    type: 'SHOW_ADD_DECK',
});

export const hideAddDeck = () => ({
    type: 'HIDE_ADD_DECK',
});
//if no state yet, then return undefined
export const get = () => JSON.parse(localStorage.getItem('state')) || undefined;

//save state and specific properties (deck and cards for this project) to the state
export const set = (state, props) => {
	let toSave = {};

	// save state's property
	props.forEach(p => toSave[p] = state[p]);
	localStorage.setItem('state', JSON.stringify(toSave));
};
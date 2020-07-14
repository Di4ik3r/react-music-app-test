import { actions } from './actions';
import { randomInteger } from '../components/App';

const reducer = (
	state = {
		tracks: generateTracks(4),
		account: {},
		addTrackInput: {},
		loginInput: {},
	},
	action
) => {
	switch (action.type) {
		case actions.LOGIN:
			return {
				...state,
				account: action.payload,
			};
		case actions.LOGOUT:
			return {
				...state,
				account: {},
			};
		case actions.ADD_TRACK:
			const tracksForAdd = state.tracks.slice();
			tracksForAdd.push(action.payload);
			action.payload.id = indexer++;
			return {
				...state,
				tracks: tracksForAdd,
			};
		case actions.LOGIN_SET_INPUT:
			return {
				...state,
				loginInput: action.payload,
			};
		case actions.ADD_TRACK_SET_INPUT:
			return {
				...state,
				addTrackInput: action.payload,
			};
		case actions.REMOVE_TRACK:
			// console.log('remove-track called');
			const tracksForRemove = state.tracks.slice();
			const trackToRemove = tracksForRemove.filter(
				(item) => item.id === action.payload.id
			)[0];
			const index = tracksForRemove.indexOf(trackToRemove);
			tracksForRemove.splice(index, 1);
			// console.log('kek', trackToRemove);
			return {
				...state,
				tracks: tracksForRemove,
			};
		default:
			// console.log('default called');
			return state;
	}
};

const bands = [
	'Bring Me The Horizon',
	'Amity Affliction',
	'Falling In Reverse',
];

// const tracks = generateTracks(10);
let indexer = 0;
function generateTracks(length) {
	let result = [];
	for (let i = 0; i < length; i++) {
		result.push(generateTrack(i));
	}

	indexer = length;
	return result;
}

function generateTrack(id) {
	return {
		id: id,
		band: bands[randomInteger(0, bands.length)],
		track: 'track ' + randomInteger(0, 99),
	};
}

export default reducer;

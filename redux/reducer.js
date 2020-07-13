import { actions } from './actions';
import { randomInteger } from '../components/App';

const reducer = (
	state = {
		tracks: generateTracks(7),
		account: {},
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
			const tracks = state.tracks.slice();
			tracks.append(action.payload);
			return {
				...state,
				tracks,
			};
		case actions.LOGIN_SET_INPUT:
			return {
				...state,
				loginInput: action.payload,
			};
		default:
			return state;
	}
};

const bands = [
	'Bring Me The Horizon',
	'Amity Affliction',
	'Falling In Reverse',
];

// const tracks = generateTracks(10);

function generateTracks(length) {
	let result = [];
	for (let i = 0; i < length; i++) {
		result.push(generateTrack(i));
	}
	return result;
}

function generateTrack(id) {
	return {
		id: id,
		band: bands[randomInteger(0, bands.length - 1)],
		track: 'track ' + randomInteger(0, 99),
	};
}

export default reducer;

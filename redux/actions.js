const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_TRACK = 'ADD_TRACK';
const LOGIN_SET_INPUT = 'LOGIN_SET_INPUT';

export const login = (input) => ({
	type: LOGIN,
	payload: {
		login: input.login,
		password: input.password,
	},
});

export const logout = () => ({
	type: LOGOUT,
});

export const addTrack = (track) => ({
	type: ADD_TRACK,
	payload: {
		track,
	},
});

export const loginSetInput = (input) => ({
	type: LOGIN_SET_INPUT,
	payload: {
		input,
	},
});

export const actions = {
	LOGIN,
	LOGOUT,
	ADD_TRACK,
	LOGIN_SET_INPUT,
};

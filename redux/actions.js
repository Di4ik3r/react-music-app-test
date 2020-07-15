const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_TRACK = 'ADD_TRACK';
const LOGIN_SET_INPUT = 'LOGIN_SET_INPUT';
const ADD_TRACK_SET_INPUT = 'ADD_TRACK_SET_INPUT';
const REMOVE_TRACK = 'REMOVE_TRACK';

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

export const addTrack = ({ band, track }) => ({
  type: ADD_TRACK,
  payload: {
    band,
    track,
  },
});

export const loginSetInput = (input) => ({
  type: LOGIN_SET_INPUT,
  payload: {
    band: input.band,
    track: input.track,
  },
});

export const addTrackSetInput = (input) => ({
  type: ADD_TRACK_SET_INPUT,
  payload: {
    input,
  },
});

export const removeTrack = (id) => ({
  type: REMOVE_TRACK,
  payload: {
    id,
  },
});

export const actions = {
  LOGIN,
  LOGOUT,
  ADD_TRACK,
  LOGIN_SET_INPUT,
  ADD_TRACK_SET_INPUT,
  REMOVE_TRACK,
};

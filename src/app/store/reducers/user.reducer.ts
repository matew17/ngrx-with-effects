import { Action, createReducer, on } from '@ngrx/store';

import {
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions/user.actions';

import { UserState } from '../../interfaces/user-state.interface';

const initialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  initialState,
  on(loadUser, (state, { id }) => ({ ...state, loading: true, id })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),
  on(loadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      message: payload.message,
    },
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}

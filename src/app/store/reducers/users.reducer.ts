import { Action, createReducer, on } from '@ngrx/store';

import {
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
} from '../actions/users.actions';

import { UsersState } from './../../interfaces/users-state.interface';

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      message: payload.message,
    },
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}

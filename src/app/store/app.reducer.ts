import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './../interfaces/app-state.interface';
import { userReducer } from './reducers/user.reducer';
import { usersReducer } from './reducers/users.reducer';

const appReducers: ActionReducerMap<AppState> = {
  user: userReducer,
  users: usersReducer,
};

export { appReducers };

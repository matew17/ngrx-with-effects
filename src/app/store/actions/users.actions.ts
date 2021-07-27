import { createAction, props } from '@ngrx/store';

import { User } from './../../models/user.model';

const loadUsers = createAction('[Users] Load Users');

const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()
);

export { loadUsers, loadUsersSuccess, loadUsersError };

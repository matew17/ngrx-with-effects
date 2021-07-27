import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

const loadUser = createAction('[User] Load User', props<{ id: string }>());

const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

const loadUserError = createAction(
  '[User] Load User Error',
  props<{ payload: any }>()
);

export { loadUser, loadUserSuccess, loadUserError };

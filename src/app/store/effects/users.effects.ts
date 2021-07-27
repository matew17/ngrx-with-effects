import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from './../../services/user.service';
import {
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
} from '../actions/users.actions';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private action$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersError({ payload: error })))
        )
      )
    )
  );
}

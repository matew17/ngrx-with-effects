import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from './../../services/user.service';
import {
  loadUser,
  loadUserError,
  loadUserSuccess,
} from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUser),
      mergeMap((action) =>
        this.userService.getUserByID(action.id).pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserError({ payload: error })))
        )
      )
    )
  );
}

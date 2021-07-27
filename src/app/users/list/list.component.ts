import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { AppState } from './../../interfaces/app-state.interface';
import { loadUsers } from 'src/app/store/actions/users.actions';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  error!: any;
  users!: User[];
  usersSubs!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());

    this.usersSubs = this.store
      .select('users')
      .subscribe(({ users, loading, error }) => {
        this.users = [...users];
        this.isLoading = loading;
        this.error = error;
      });
  }

  ngOnDestroy(): void {
    this.usersSubs?.unsubscribe();
  }
}

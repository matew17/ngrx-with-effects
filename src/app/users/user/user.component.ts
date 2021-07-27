import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { AppState } from './../../interfaces/app-state.interface';
import { loadUser } from 'src/app/store/actions/user.actions';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  userSubs!: Subscription;
  user!: User;
  loading!: boolean;
  error!: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSubs = this.store
      .select('user')
      .subscribe(({ user, loading, error }) => {
        console.log(user, loading, error);
        this.user = { ...user } as any;
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id }));
    });
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}

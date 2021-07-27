import { UsersState } from './users-state.interface';
import { UserState } from './user-state.interface';

export interface AppState {
  user: UserState;
  users: UsersState;
}

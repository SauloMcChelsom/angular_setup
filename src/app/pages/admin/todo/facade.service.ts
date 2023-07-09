import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { combineLatest, Observable, of, pipe, throwError } from 'rxjs';

import { switchMap, filter, map, mergeMap } from 'rxjs/operators';

import { User } from './entities/user.model';
import { UserService } from './api/user.service';

interface State {
	selectedUser: number;
	users: User[];
}

@Injectable({
	providedIn: 'root',
})
export class FacadeService extends ComponentStore<State> {
	readonly selectedUser$ = this.select(({ users, selectedUser }) => users.find(u => u.id === selectedUser)).pipe(
		filter(user => !!user),
		switchMap(user => (user ? of(user).pipe(map(r => r)) : of(user)))
	);

	readonly users$ = this.select(({ users }) => users).pipe(map(r => r));

	readonly selectUser = this.updater((state: State, user: User) => ({
		...state,
		selectedUser: user.id,
	}));

	readonly loadUsers = this.effect<void>(
		pipe(switchMap(() => this.userService.getAll().pipe(tapResponse(users => this.patchState({ users }), console.error))))
	);

	constructor(private readonly userService: UserService) {
		super({
			selectedUser: -1,
			users: [],
		});
	}
}

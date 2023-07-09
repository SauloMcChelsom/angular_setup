import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TodosApiService } from '../api/todos-api.service';
import * as appActions from './index.actions';

@Injectable()
export class AppStoreEffects {
	constructor(
		private dataService: TodosApiService,
		private actions$: Actions
	) {}

	loadAppAllRequestEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(appActions.loadAppAllAction),
			switchMap(action => {
				return this.dataService.getTodos().pipe(
					//tap((item)=>console.log("getTodos--> ", item)),
					map((item: any) => {
						return appActions.loadAppSuccessAction({ item });
					}),
					catchError((error: any) => {
						return observableOf(appActions.loadAppFailureAction({ error }));
					})
				);
			})
		)
	);

	loadAppByUserIdRequestEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(appActions.loadAppRequestAction),
			switchMap(action => {
				return this.dataService.getTodoById(action.id).pipe(
					tap(item => console.log('getTodoById--> ', item)),
					map((item: any) => {
						return appActions.loadAppSuccessAction({ item });
					}),
					catchError((error: any) => {
						return observableOf(appActions.loadAppFailureAction({ error }));
					})
				);
			})
		)
	);

	saveRequestEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(appActions.saveRequestAction),
			switchMap(action => {
				return this.dataService.createTodo(action.item).pipe(
					map((item: any) => {
						return appActions.saveSuccessAction({ item });
					}),
					catchError(error => {
						return observableOf(appActions.saveFailureAction({ error }));
					})
				);
			})
		)
	);

	updateRequestEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(appActions.updateRequestAction),
			switchMap(action => {
				return this.dataService.updateTodo(action.item).pipe(
					map((item: any) => {
						return appActions.updateSuccessAction({ item });
					}),
					catchError(error => {
						return observableOf(appActions.updateFailureAction({ error }));
					})
				);
			})
		)
	);

	deleteRequestEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(appActions.deleteRequestAction),
			switchMap(action => {
				tap(action => console.log('deleteTodo--> ', action));
				return this.dataService.deleteTodo(action.item).pipe(
					tap(item => console.log('deleteTodo--> ', item)),
					map((item: any) => {
						return appActions.deleteSuccessAction({ item });
					}),
					catchError(error => {
						return observableOf(appActions.deleteFailureAction({ error }));
					})
				);
			})
		)
	);
}

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TodosApiService } from '../api/todos-api.service';
import * as bookActions from './index.actions';
 
@Injectable()
export class BookStoreEffects {
  constructor(
    private dataService: TodosApiService, 
    private actions$: Actions
  ) {}

  private parameters:any = null

  loadBookAllRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.loadBookAllAction),
    switchMap(action => {
      return this.dataService.getTodos().pipe(
        tap((book)=>console.log("getTodos--> ", book)),
        map((book: any) => {
            return bookActions.loadBookSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookFailureAction({ error }))
        })
      )
    })
  ))

  loadBookByUserIdRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.loadBookRequestAction),
      switchMap(action => {
        return this.dataService.getTodoById(action.id).pipe(
          tap((book)=>console.log("getTodoById--> ", book)),
          map((book: any) => {
              return bookActions.loadBookSuccessAction({ book })
          }),
          catchError((error: any) => {
            return observableOf(bookActions.loadBookFailureAction({ error }))
          })
        )
      })
  ))
 
  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.saveRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.createTodo(action.item).pipe(
        map((item: any) => {
            return bookActions.saveSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.saveFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getTodoById(this.parameters.user_id).pipe(
        map((book: any) => {
            this.parameters = 'NEW_INPUT'
            return bookActions.loadBookSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookFailureAction({ error }))
        })
      )
    })
  ))
 
  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.updateRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.updateTodo(action.item).pipe(
        map((item: any) => {
            return bookActions.updateSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.updateFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getTodoById(this.parameters.user_id).pipe(
        map((book: any) => {
          console.log(book)
            return bookActions.loadBookSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookFailureAction({ error }))
        })
      )
    })
  ))
 
  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.deleteRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.deleteTodo(action.item).pipe(
        map((item: any) => {
           return bookActions.deleteSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.deleteFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getTodoById(this.parameters.user_id).pipe(
        map((book: any) => {
            return bookActions.loadBookSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookFailureAction({ error }))
        })
      )
    })
  ))
}
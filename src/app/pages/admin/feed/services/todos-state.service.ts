import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { tap } from 'rxjs/operators';
import { map, shareReplay, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { Filter } from '../models/filter';
import * as appSelectors from './store/index.selectors'
import * as appActions from './store/index.actions'
import { AppState, initialState } from '../models/app-state';

@Injectable()
export class TodosStateService {

  /**
   * temos que realizar a trocar do select para fazer a buscar
   * o todosFiltered$ e o filtro uma malandragem kkkkk
   * ao inves de 
   * public todosDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps)
   * public todosDone$: Observable<Todo[]> = this.todosFiltered$
   * 
   * temos que criar uma logica de quamdo alterar o filtro alterar os controller do select
   * o public updateFilter(filter: Filter) receber os valores do filtro
   */
  private todosFiltered$: Observable<Todo[]> = this.select((state) => {
    return getTodosFiltered(state.todos, state.filter);
  });

  public state$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  public state2$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  public todosDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))
  );

  public todosNotDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))
  );

  public filter$: Observable<Filter> = this.select2((state) => state == null  ? initialState.filter : initialState.filter);

  public selectedTodo$: Observable<Todo> = this.select((state) => {
    if(state == null){
      return
    }
    if (state.selectedTodoId === 0) {
      return new Todo();
    }
    return state.find((item) => item.id === state.selectedTodoId);
  }).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  protected select2(mapFn: (state: any) => any): Observable<any> {
    return this.store$.select(appSelectors.getApps).pipe(
      //tap((r: any) => console.log(r)),
      map((state: any) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected select(mapFn: (state: any) => any): Observable<any> {
    return this.store$.select(appSelectors.getApps).pipe(
      map((state: any) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  constructor(private store$: Store<any>) {
    this.load();

    this.store$.select(appSelectors.getApps).pipe(
      map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))
    ).subscribe(r=>this.state$.next(r))

    this.store$.select(appSelectors.getApps).pipe(
      map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))
    ).subscribe(r=>this.state2$.next(r))
  }

  setUser(user: Todo[]): void {
    this.state$.next(user);
  }

  getUser(): Observable<Todo[]> {
    return this.state$.asObservable();
  }

  public selectTodo(todo: Todo) {}

  public initNewTodo() {}

  public clearSelectedTodo() {}

  public updateFilter(filter: Filter) {
    this.state$.next([])
    this.state2$.next([])

    let Private$ = this.store$.select(appSelectors.getAppIsPrivate, true)
    let Business$ = this.store$.select(appSelectors.getAppIsBusiness, true)

    if(filter.category.isPrivate && filter.category.isBusiness == false){
      Private$.pipe(map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))).subscribe((r:Todo[])=>{
        this.state$.next(r)
      }).unsubscribe()
      Private$.pipe(map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))).subscribe((r:Todo[])=>{
        this.state2$.next(r)
      }).unsubscribe()
    }

    if(filter.category.isBusiness && filter.category.isPrivate == false){
      Business$.pipe(map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))).subscribe((r:Todo[])=>{
        this.state$.next(r)
      }).unsubscribe()
      Business$.pipe(map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))).subscribe((r:Todo[])=>{
        this.state2$.next(r)
      }).unsubscribe()
    }

    if(filter.category.isBusiness == false && filter.category.isPrivate == false){
      this.store$.select(appSelectors.getApps).pipe(map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))).subscribe((r:Todo[])=>{
        this.state$.next(r)
      }).unsubscribe()

      this.store$.select(appSelectors.getApps).pipe(map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))).subscribe((r:Todo[])=>{
        this.state2$.next(r)
      }).unsubscribe()
    }
  }

  public create(todo: Todo) {}

  public update(todo: Todo) {}

  public delete(todo: Todo) {}

  private load() {
    this.store$.dispatch(appActions.loadAppAllAction())
  }
}

function getTodosFiltered(todos, filter): Todo[] {
  return todos.filter((item) => {
    return (
      item.title.toUpperCase().indexOf(filter.search.toUpperCase()) > -1 &&
      (filter.category.isBusiness ? item.isBusiness : true) &&
      (filter.category.isPrivate ? item.isPrivate : true)
    );
  });
}

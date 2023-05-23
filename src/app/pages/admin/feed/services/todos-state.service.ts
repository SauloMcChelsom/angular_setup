import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map, shareReplay, distinctUntilChanged } from 'rxjs/operators';

import { Todo } from '../models/todo';
import { Filter } from '../models/filter';
import * as appSelectors from './store/index.selectors'
import * as appActions from './store/index.actions'


@Injectable()
export class TodosStateService {

  private todosFiltered$: Observable<Todo[]> = this.select((state) => {
    return getTodosFiltered(state.todos, state.filter);
  });

  public todosDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))
  );

  public todosNotDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))
  );

  public filter$: Observable<Filter> = this.select((state) => state.filter);
  
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

  protected select(mapFn: (state: any) => any): Observable<any> {
    return this.store$.select(appSelectors.getApps).pipe(
      map((state: any) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  constructor(private store$: Store<any>) {
    //super(initialState);
    this.load();
  }

  public selectTodo(todo: Todo) {}

  public initNewTodo() {}

  public clearSelectedTodo() {}

  public updateFilter(filter: Filter) {}

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

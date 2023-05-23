import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { StateService } from '@app/shared/stores/customized/state.service';
import { Todo } from '../models/todo';
import { Filter } from '../models/filter';
import { map, shareReplay } from 'rxjs/operators';
import { TodosApiService } from './api/todos-api.service';
import * as appSelectors from './store/index.selectors'
import * as appActions from './store/index.actions'
import { tap } from 'rxjs/operators';

@Injectable()
export class TodosStateService {

  private todosFiltered$: Observable<Todo[]>;

  todosDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => todo.isDone))
  );

  todosNotDone$: Observable<Todo[]> = this.store$.select(appSelectors.getApps).pipe(
    map((todos) => todos == null  ? null : todos.filter((todo) => !todo.isDone))
  );

  filter$: Observable<Filter>;
  
  selectedTodo$: Observable<Todo>;

  constructor(private store$: Store<any>) {
   
    //super(initialState);
    console.log('----- feed ---------')
    this.load();
    
  }

  selectTodo(todo: Todo) {
    
  }

  initNewTodo() {
    
  }

  clearSelectedTodo() {
    
  }

  updateFilter(filter: Filter) {

  }

  load() {
    this.store$.dispatch(appActions.loadAppAllAction())
  }

  create(todo: Todo) {

  }

  update(todo: Todo) {

  }

  delete(todo: Todo) {

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

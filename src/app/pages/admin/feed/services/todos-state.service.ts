import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { StateService } from '@app/shared/stores/customized/state.service';
import { Todo } from '../models/todo';
import { Filter } from '../models/filter';
import { map, shareReplay } from 'rxjs/operators';
import { TodosApiService } from './api/todos-api.service';
import * as bookSelectors from './store/index.selectors'
import * as bookActions from './store/index.actions'

interface TodoState {
  todos: Todo[];
  selectedTodoId: number;
  filter: Filter;
}

const initialState: TodoState = {
  todos: [],
  selectedTodoId: undefined,
  filter: {
    search: '',
    category: {
      isBusiness: false,
      isPrivate: false,
    },
  },
};

@Injectable()
export class TodosStateService {

  private todosFiltered$: Observable<Todo[]>;

  todosDone$: Observable<Todo[]>;

  todosNotDone$: Observable<Todo[]>;

  filter$: Observable<Filter>;
  
  selectedTodo$: Observable<Todo>;

  constructor(private store$: Store<any>) {
   
    //super(initialState);
    console.log('----- feed ---------')
    this.load(3);
    
  }

  selectTodo(todo: Todo) {
    
  }

  initNewTodo() {
    
  }

  clearSelectedTodo() {
    
  }

  updateFilter(filter: Filter) {

  }

  // API BACK END
  load(user_id) {
    this.store$.dispatch(bookActions.loadBookRequestAction({
      id:user_id
    }))
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

import { Component, OnInit } from '@angular/core';
import { TodosStateService } from './services/todos-state.service';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { Filter } from './models/filter';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public filter$: Observable<Filter> = this.todosState.filter$;
  public todosDone$: Observable<Todo[]> = this.todosState.todosDone$;
  public todosNotDone$: Observable<Todo[]> = this.todosState.todosNotDone$;
  public selectedTodo$: Observable<Todo> = this.todosState.selectedTodo$;
  public load$:boolean = false

  constructor(private todosState: TodosStateService) { 
    this.todosNotDone$.subscribe((r)=>{
      if(r){
        if(r.length >= 1){
          this.load$ = true;
        }
      }
    })
    this.todosNotDone$.subscribe((r)=>{
      if(r){
        if(r.length >= 1){
          this.load$ = true;
        }
      }
    })
  }

  ngOnInit() {}

  selectTodo(todo: Todo) {
    this.todosState.selectTodo(todo);
  }

  addTodo() {
    this.todosState.initNewTodo();
  }

  onFilterUpdate(filter: Filter) {
    this.todosState.updateFilter(filter);
  }
}

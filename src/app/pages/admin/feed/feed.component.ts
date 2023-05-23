import { Component, OnInit } from '@angular/core';
import { TodosStateService } from './services/todos-state.service';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public todosDone$: Observable<Todo[]> = this.todosState.todosDone$;
  public todosNotDone$: Observable<Todo[]> = this.todosState.todosNotDone$;
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
}

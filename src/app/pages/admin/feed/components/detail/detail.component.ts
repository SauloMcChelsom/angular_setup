import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import * as appActions from '@app/pages/admin/feed/services/store/index.actions'
import * as appSelectors from '@app/pages/admin/feed/services/store/index.selectors'
import { TodosStateService } from '../../services/todos-state.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  public loading_update = false
  public loading_delete = false

  public todos$ = this.store$.select(appSelectors.getSelectedApp)

  public newTodo: Todo = {
    id:null,
    title: null,
  }

  constructor(private cd: ChangeDetectorRef, private store$: Store<any>, private todosService: TodosStateService, private router: Router) {}

  ngOnInit() {}

  onFilterUpdate($event:any){
    console.log($event)
    this.newTodo = $event
  }

  delete() {
    const copy:Todo = JSON.parse(JSON.stringify(this.newTodo))
    this.todosService.delete(copy)
    this.newTodo = {
      title:null,
      id:null,
    }
    

    this.loading_delete = true
    setTimeout(()=>{
      this.loading_delete = false
      this.back()
    },5000)
  }

  update() {
    const copy:Todo = JSON.parse(JSON.stringify(this.newTodo))
    this.todosService.update(copy)

    this.newTodo = {
      title:null,
      id:null,
    }

    this.loading_update = true
    setTimeout(()=>{
      this.newTodo = {
        title:'x',
        id:null,
      }
      this.loading_update = false
      this.cd.markForCheck();
    },5000)
  }

  back(){
    this.router.navigate(['/admin/course']);
  }
}

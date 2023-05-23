import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Input()
  selectedTodo: Todo;

  @Output()
  selectTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

}

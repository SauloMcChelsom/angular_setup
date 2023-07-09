import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { Filter } from '../../models/filter';
import { TodosStateService } from '../../services/todos-state.service';

@Component({
	selector: 'app-todo-shell',
	templateUrl: './todo-shell.component.html',
	styleUrls: ['./todo-shell.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoShellComponent {
	public todosDone$: Observable<Todo[]> = this.todosState.todosDone$;
	public todosNotDone$: Observable<Todo[]> = this.todosState.todosNotDone$;
	public selectedTodo$: Observable<Todo> = this.todosState.selectedTodo$;
	public filter$: Observable<Filter> = this.todosState.filter$;
	public load$: boolean = false;

	constructor(
		private todosState: TodosStateService,
		private router: Router
	) {
		this.todosNotDone$.subscribe(r => {
			if (r.length >= 1) {
				this.load$ = true;
			}
		});
		this.todosNotDone$.subscribe(r => {
			if (r.length >= 1) {
				this.load$ = true;
			}
		});
	}

	selectTodo(todo: Todo) {
		this.todosState.selectTodo(todo);
	}

	addTodo() {
		this.todosState.initNewTodo();
		//this.router.navigate(['/admin/todo/create']);
	}

	onFilterUpdate(filter: Filter) {
		this.todosState.updateFilter(filter);
		//this.router.navigate(['/admin/todo/edit']);
	}
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TodosStateService } from './services/todos-state.service';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { Filter } from './models/filter';
import { Router } from '@angular/router';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
	public filter$: Observable<Filter> = this.todosState.filter$;
	public todosDone$: Observable<Todo[]> = this.todosState.state$;
	public todosNotDone$: Observable<Todo[]> = this.todosState.state2$;
	public selectedTodo$: Observable<Todo> = this.todosState.selectedTodo$;
	public load$: boolean = false;

	constructor(
		private todosState: TodosStateService,
		private router: Router
	) {
		this.todosNotDone$.subscribe(r => {
			if (r) {
				if (r.length >= 1) {
					this.load$ = true;
				}
			}
		});
		this.todosNotDone$.subscribe(r => {
			if (r) {
				if (r.length >= 1) {
					this.load$ = true;
				}
			}
		});
	}

	ngOnInit() {}

	selectTodo(todo: Todo) {
		this.todosState.selectTodo(todo);
		setTimeout(() => {
			this.router.navigate(['/admin/course/detail']);
		}, 200);
	}

	addTodo() {
		//this.todosState.initNewTodo();
		this.router.navigate(['/admin/course/create']);
	}

	onFilterUpdate(filter: Filter) {
		this.todosState.updateFilter(filter);
	}
}

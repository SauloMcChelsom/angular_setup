import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TodosStateService } from '../../services/todos-state.service';
import * as appSelectors from '@app/pages/admin/feed/services/store/index.selectors';
import * as appActions from '@app/pages/admin/feed/services/store/index.actions';
import { Todo } from '../../models/todo';

@Component({
	selector: 'create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent implements OnInit {
	public loading = false;

	public newTodo: Todo = {
		id: null,
		title: null,
	};

	constructor(
		private store$: Store<any>,
		private todosService: TodosStateService,
		private router: Router
	) {}

	ngOnInit() {}

	onFilterUpdate($event: any) {
		console.log($event);
		this.newTodo = $event;
	}

	submit() {
		this.todosService.create(this.newTodo);
		this.store$.select(appActions.saveSuccessAction).subscribe((res: any) => {
			this.loading = res.feedStoreVersion.isLoading;
			if (this.loading == false) {
				this.loading = res.feedStoreVersion.isLoading;
				this.router.navigate(['/admin/course']);
			}
		});
		setTimeout(() => {
			this.store$.dispatch(appActions.loadAppAllAction());
		}, 5000);
	}

	back() {
		this.router.navigate(['/admin/course']);
	}
}

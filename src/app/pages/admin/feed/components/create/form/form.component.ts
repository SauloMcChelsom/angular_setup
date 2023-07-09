import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Todo {
	id: number;
	title: string;
	isDone: boolean;
	isBusiness?: boolean;
	isPrivate?: boolean;
}

export const initialState: Todo = {
	id: null,
	title: '',
	isDone: null,
	isBusiness: null,
	isPrivate: null,
};

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedFormComponent implements OnInit {
	private unsubscribe$ = new Subject();

	@Output()
	public filterUpdate: EventEmitter<Todo> = new EventEmitter();

	public form: FormGroup;

	public get title() {
		return this.form.get('title');
	}

	public get isDone() {
		return this.form.get('isDone');
	}

	public get isBusiness() {
		return this.form.get('isBusiness');
	}

	public get isPrivate() {
		return this.form.get('isPrivate');
	}

	public foods = [
		{ value: 'isBusiness', viewValue: 'Is business' },
		{ value: 'isPrivate', viewValue: 'Is private' },
	];

	selected = null;

	constructor() {}

	ngOnInit() {
		this.createForm(initialState);
		this.form.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(350)).subscribe(value => {
			this.filterUpdate.emit({ ...value });
		});
	}

	private createForm(form: Todo) {
		this.form = new FormGroup({
			title: new FormControl({ value: form.title, disabled: false }, Validators.compose([Validators.required])),
			isDone: new FormControl({ value: form.isDone, disabled: false }, Validators.compose([Validators.required])),
			isBusiness: new FormControl({ value: form.isBusiness, disabled: false }, Validators.compose([Validators.required])),
			isPrivate: new FormControl({ value: form.isPrivate, disabled: false }, Validators.compose([Validators.required])),
		});
	}

	public CategoryChange() {
		if (this.selected == undefined) {
			this.form.patchValue({
				isBusiness: null,
				isPrivate: null,
			});
		} else if (this.selected == 'isPrivate') {
			this.form.patchValue({
				isBusiness: false,
				isPrivate: true,
			});
		} else if (this.selected == 'isBusiness') {
			this.form.patchValue({
				isBusiness: true,
				isPrivate: false,
			});
		}
	}

	public cleanUser() {
		this.title.reset();
	}
}

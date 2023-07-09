import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-alert',
	template: `
		<div>
			{{ hidden }}
		</div>
	`,
	styles: [``],
})
export class AlertComponent {
	hidden = true;

	@Input() ok = 'OK';
	@Output() close = new EventEmitter<boolean>();

	constructor() {}

	show() {
		this.hidden = false;
	}

	hide() {
		this.hidden = true;
		this.close.emit(true);
	}
}

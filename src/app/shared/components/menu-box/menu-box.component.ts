import { Component, Input } from '@angular/core';
@Component({
	selector: 'menu-box',
	templateUrl: './menu-box.component.html',
})
export class MenuBoxComponent {
	@Input() titulo: string = '';

	constructor() {}
}

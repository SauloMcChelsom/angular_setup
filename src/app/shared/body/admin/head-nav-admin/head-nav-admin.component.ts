import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'head-nav-admin',
	templateUrl: 'head-nav-admin.component.html',
	styleUrls: ['head-nav-admin.component.scss'],
})
export class HeadNavAdminComponent {
	constructor(private router: Router) {}

	verifyNotification() {
		localStorage.setItem('notificacao', 'true');
		this.router.navigate(['/admin/home']);
	}
}

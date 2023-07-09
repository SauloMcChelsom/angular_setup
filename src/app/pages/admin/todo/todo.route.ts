import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

const routes: Routes = [
	{
		path: '',
		component: TodoComponent,
		canActivate: [],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TodoModuleRoute {}

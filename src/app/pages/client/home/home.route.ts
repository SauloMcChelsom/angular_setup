import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { IsUserGuard } from '@app/shared/guards/is_user.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard, IsUserGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoute {}

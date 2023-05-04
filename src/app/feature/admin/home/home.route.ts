import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { IsAdminGuard } from '@app/shared/guards/is_admin.guard';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard, IsAdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoute {}
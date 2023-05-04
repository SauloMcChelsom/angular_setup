import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { IsUserGuard } from '@app/shared/guards/is_user.guard';

const routes: Routes = [
  {
    path: '', 
    component: SettingsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingsRoute {}
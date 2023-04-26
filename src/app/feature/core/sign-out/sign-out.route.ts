import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignOutComponent } from './sign-out.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: SignOutComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignOutRoute {}
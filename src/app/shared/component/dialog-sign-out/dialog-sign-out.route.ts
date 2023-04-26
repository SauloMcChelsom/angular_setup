import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogSignOut } from './dialog-sign-out.component';

const routes: Routes = [
  {path: '', component: DialogSignOut}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DialogSignOutRoute {}


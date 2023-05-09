import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: TodoShellComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create', 
    component: TodoDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit', 
    component: TodoDetailComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoute {}
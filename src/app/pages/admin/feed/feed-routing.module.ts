import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { EditComponent } from './components/edit/edit.component';
import { FeedComponent } from './feed.component';

const routes: Routes = [
  {
    path: '', 
    component: FeedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create', 
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit', 
    component: EditComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }

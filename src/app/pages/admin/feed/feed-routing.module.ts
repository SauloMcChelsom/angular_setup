import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { FeedComponent } from './feed.component';
import { DetailComponent } from './components/detail/detail.component';

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
    path: 'detail', 
    component: DetailComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {}

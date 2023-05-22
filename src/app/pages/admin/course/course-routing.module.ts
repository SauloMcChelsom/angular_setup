import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../feed/course.component';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { IsAdminGuard } from '@app/shared/guards/is_admin.guard';

const routes: Routes = [
  {
    path: '', 
    component: CourseComponent,
    canActivate: [AuthGuard, IsAdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }

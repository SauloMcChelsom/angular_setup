import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { CourseRoutingModule } from './course-routing.module';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  providers:[
    CourseService
  ]
})
export class CourseModule { }

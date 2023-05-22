import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from '../feed/course.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseReducer } from './store/reducers/course.reducer';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({
      'course': CourseReducer,
    }),
    CourseRoutingModule
  ],
  providers:[
    CourseService
  ]
})
export class CourseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'

@NgModule({
  declarations: [
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [SkeletonComponent]
})
export class SkeletonModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { MenuBoxComponent } from './menu-box.component';

@NgModule({
  declarations: [
    MenuBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    MenuBoxComponent,
  ]
})
export class MenuBoxModule {}
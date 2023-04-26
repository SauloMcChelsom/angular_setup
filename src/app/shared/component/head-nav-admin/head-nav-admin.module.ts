import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { HeadNavAdminComponent } from '@app/shared/component/head-nav-admin/head-nav-admin.component';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ], 
  declarations: [
    HeadNavAdminComponent
  ],
  exports: [
    HeadNavAdminComponent
  ],
  providers: [ ]
})
export class HeadNavAdminModule { }

import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { MenuSideAdminComponent } from '@app/shared/component/menu-side-admin/menu-side-admin.component';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ], 
  declarations: [
    MenuSideAdminComponent
  ],
  exports: [
    MenuSideAdminComponent
  ],
  providers: [ ]
})
export class MenuSideAdminModule { }

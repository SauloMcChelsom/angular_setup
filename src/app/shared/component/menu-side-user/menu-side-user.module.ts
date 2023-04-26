import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { MenuSideUserComponent } from '@app/shared/component/menu-side-user/menu-side-user.component';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ], 
  declarations: [
    MenuSideUserComponent
  ],
  exports: [
    MenuSideUserComponent
  ],
  providers: [ ]
})
export class MenuSideUserModule { }

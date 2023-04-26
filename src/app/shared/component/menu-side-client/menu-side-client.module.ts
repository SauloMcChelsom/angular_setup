import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { MenuSideclientComponent } from '@app/shared/component/menu-side-client/menu-side-client.component';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ], 
  declarations: [
    MenuSideclientComponent
  ],
  exports: [
    MenuSideclientComponent
  ],
  providers: [ ]
})
export class MenuSideclientModule { }

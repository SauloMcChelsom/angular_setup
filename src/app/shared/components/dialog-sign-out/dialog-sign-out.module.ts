import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { DialogSignOutRoute }  from './dialog-sign-out.route';
import { DialogSignOut, DialogSignOutRef } from '@app/shared/components/dialog-sign-out/dialog-sign-out.component';
@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    DialogSignOutRoute
  ], 
  declarations: [
    DialogSignOut,
    DialogSignOutRef
  ],
  exports: [
    DialogSignOut,
    DialogSignOutRef
  ],
  providers: [ ]
})
export class DialogSignOutModule { }

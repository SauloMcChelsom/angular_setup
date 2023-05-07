import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { SignOutComponent }  from './sign-out.component';
import { SignOutRoute }  from './sign-out.route';
import { DialogSignOutModule } from '@app/shared/component/dialog-sign-out/dialog-sign-out.module';
import { MenuBoxModule } from '@app/shared/component/menu-box/menu-box.module';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SignOutRoute,
    DialogSignOutModule,
    MenuBoxModule
  ], 
  declarations: [
    SignOutComponent
  ],
  providers: []
})
export class SignOutModule { }

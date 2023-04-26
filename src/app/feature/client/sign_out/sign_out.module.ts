import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { SignOutComponent }  from './sign_out.component';
import { SignOutRoute }  from './sign_out.route';
import { SignOutService }  from './sign_out.service'

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SignOutRoute
  ], 
  declarations: [
    SignOutComponent
  ],
  providers: [ SignOutService ]
})
export class SignOutModule { }

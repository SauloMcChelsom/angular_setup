import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { AdminRouteModule } from './admin.route';
import { HomeModule } from './home/home.module';
import { SignOutModule } from './sign_out/sign_out.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [     
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,

    HomeModule,
    SignOutModule,
    SettingsModule,
    AdminRouteModule,
  ], 
  declarations: [],
  providers: [  ]
})
export class AdminModule { }

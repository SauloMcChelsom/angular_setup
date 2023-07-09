import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { LoginComponent } from './login.component';
import { LoginRoute } from './login.route';
import { LoginService } from './login.service';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, LoginRoute],
	declarations: [LoginComponent],
	providers: [LoginService],
})
export class LoginModule {}

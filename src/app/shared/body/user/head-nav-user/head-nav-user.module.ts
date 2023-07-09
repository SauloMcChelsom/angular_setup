import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { HeadNavUserComponent } from '@app/shared/body/user/head-nav-user/head-nav-user.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
	declarations: [HeadNavUserComponent],
	exports: [HeadNavUserComponent],
	providers: [],
})
export class HeadNavUserModule {}

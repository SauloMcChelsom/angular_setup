import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { MenuSideAdminComponent } from '@app/shared/body/admin/menu-side-admin/menu-side-admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, RouterModule],
	declarations: [MenuSideAdminComponent],
	exports: [MenuSideAdminComponent],
	providers: [],
})
export class MenuSideAdminModule {}

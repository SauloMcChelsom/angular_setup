import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { MenuSideclientComponent } from '@app/shared/body/client/menu-side-client/menu-side-client.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule, AngularMaterialModule],
	declarations: [MenuSideclientComponent],
	exports: [MenuSideclientComponent],
	providers: [],
})
export class MenuSideclientModule {}

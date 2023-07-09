import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForbiddenComponent } from './forbidden.component';
import { ForbiddenRoute } from './forbidden.route';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule],
	declarations: [ForbiddenComponent],
	exports: [ForbiddenComponent, ForbiddenRoute],
})
export class ForbiddenModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnauthorizedComponent } from './unauthorized.component';
import { UnauthorizedRoute } from './unauthorized.route';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule],
	declarations: [UnauthorizedComponent],
	exports: [UnauthorizedComponent, UnauthorizedRoute],
})
export class UnauthorizedModule {}

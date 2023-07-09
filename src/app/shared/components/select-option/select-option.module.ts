import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectOptionComponent } from './select-option.component';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
	declarations: [SelectOptionComponent],
	exports: [SelectOptionComponent],
})
export class SelectOptionModule {}

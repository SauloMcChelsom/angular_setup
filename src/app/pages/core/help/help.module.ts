import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { HelpRoute } from './help.route';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule],
	declarations: [HelpComponent],
	exports: [HelpComponent, HelpRoute],
})
export class HelpModule {}

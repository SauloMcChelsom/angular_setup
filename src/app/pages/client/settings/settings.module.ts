import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoute } from './settings.route';
import { SettingsService } from './settings.service';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, SettingsRoute],
	declarations: [SettingsComponent],
	providers: [SettingsService],
})
export class SettingsModule {}

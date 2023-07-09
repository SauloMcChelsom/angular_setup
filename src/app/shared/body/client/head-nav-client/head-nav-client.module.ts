import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { HeadNavClientComponent } from '@app/shared/body/client/head-nav-client/head-nav-client.component';
import { HeadNavClientService } from './head-nav-client.service';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
	declarations: [HeadNavClientComponent],
	exports: [HeadNavClientComponent],
	providers: [HeadNavClientService],
})
export class HeadNavClientModule {}

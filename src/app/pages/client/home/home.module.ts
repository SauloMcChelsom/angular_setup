import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home.route';
import { HomeService } from './home.service';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, HomeRoute],
	declarations: [HomeComponent],
	providers: [HomeService],
})
export class HomeModule {}

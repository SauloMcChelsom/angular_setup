import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo.component';
import { TodoModuleRoute } from './todo.route';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, HttpClientModule, TodoModuleRoute],
	declarations: [TodoComponent],
	bootstrap: [TodoComponent],
})
export class TodoModule {}

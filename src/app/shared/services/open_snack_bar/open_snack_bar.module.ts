import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenSnackBarService } from './open_snack_bar.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
	imports: [CommonModule],
	providers: [OpenSnackBarService],
})
export class OpenSnackBarModule {}

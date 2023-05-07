import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpErrorResponseService } from './http_error_response.service';
import { OpenSnackBarService } from '../open_snack_bar/open_snack_bar.service';

@NgModule({
  imports: [ CommonModule ], 
  providers: [ OpenSnackBarService, HttpErrorResponseService ]
})
export class HttpErrorResponseModule { }

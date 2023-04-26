import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { LocalStoregeService } from './local_storege.service';

@NgModule({
  imports: [ CommonModule ], 
  providers: [ LocalStoregeService ]
})
export class LocalStoregeModule { }

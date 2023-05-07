import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HeadNavService } from './head_nav.service';
@NgModule({
  imports: [CommonModule], 
  providers: [ HeadNavService ]
})
export class HeadNavModule { }

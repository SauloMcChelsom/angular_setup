import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

@Component({
  selector: 'create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor(private store$: Store<any>) {}

  ngOnInit() {}
  
}

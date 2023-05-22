import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private store$: Store<any>, private router: Router) {}

  ngOnInit() {
  
  }

}
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private store$: Store<any>, private router: Router, private ref: ChangeDetectorRef) {}

  ngOnInit() {
  }
}

import  {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-side-admin',
  templateUrl: 'menu-side-admin.component.html',
  styleUrls: ['menu-side-admin.component.scss'],
})
export class MenuSideAdminComponent {

  constructor(private router:Router){}
}
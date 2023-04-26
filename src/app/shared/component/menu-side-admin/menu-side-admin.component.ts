import  {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-side-admin',
  templateUrl: 'menu-side-admin.component.html',
  styleUrls: ['menu-side-admin.component.scss'],
})
export class MenuSideAdminComponent {

  constructor(private router:Router){

  }
  
  public btnClickSignIn():void {
    this.router.navigateByUrl('/sign-out');
  }

  public btnClickHome():void {
    this.router.navigateByUrl('/admin/home');
  }
}
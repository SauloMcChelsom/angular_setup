import  {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-side-user',
  templateUrl: 'menu-side-user.component.html',
  styleUrls: ['menu-side-user.component.scss'],
})
export class MenuSideUserComponent {

  constructor(private router:Router){

  }
  
  public btnClickSignIn():void {
    this.router.navigateByUrl('/login');
  }

  public btnClickHelp():void {
    this.router.navigateByUrl('/help');
  }
}
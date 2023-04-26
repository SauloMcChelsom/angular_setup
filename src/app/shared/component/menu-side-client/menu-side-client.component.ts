import  {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-side-client',
  templateUrl: 'menu-side-client.component.html',
  styleUrls: ['menu-side-client.component.scss'],
})
export class MenuSideclientComponent {

  constructor(private router:Router){}
  
  public btnClickSignIn():void {
    this.router.navigateByUrl('/client/sign-out');
  }

  public btnClickHome():void {
    this.router.navigateByUrl('/client/home');
  }
}
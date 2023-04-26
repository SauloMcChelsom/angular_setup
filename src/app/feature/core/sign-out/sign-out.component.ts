import { Component, ViewChild } from '@angular/core';
import { DialogSignOut } from '@app/shared/component/dialog-sign-out/dialog-sign-out.component';


@Component({
  selector: 'sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {

  @ViewChild(DialogSignOut) signOut: DialogSignOut;

  constructor() {}

  openDialog(){
    this.signOut.openDialog()
  }

  logoff($event){
    if($event){
      window.location.href='/';
    }
  }
}
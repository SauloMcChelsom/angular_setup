import { HttpErrorResponse } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { SignOutService } from './sign_out.service'
import { AppService } from '@app/app.service'
import { Forms, ISignIn } from './sign_out.interface'
import { IHttpResponse } from '@app/shared/entities/http_response.entity'
import { LocalStorageUserUtils } from '@app/shared/utils/local-storege-user.utils'
import { Role, UserEntity } from '@app/shared/entities/user.entity'
import { OpenSnackBarService } from '@app/shared/service/open_snack_bar/open_snack_bar.service'
import { HttpErrorResponseService } from '@app/shared/service/http_error/http_error_response.service'
import { UserStore } from '@app/shared/stores/customized/user-store'
import { TokenStore } from '@app/shared/stores/customized/token.store'
import { TokenEntity } from '@app/shared/entities/token.entity'
import { Observable } from 'rxjs';
import { LoadStore } from '@app/shared/stores/customized/load.store'

@Component({
  selector: 'sign_out',
  templateUrl: './sign_out.component.html',
  styleUrls: ['./sign_out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignOutComponent implements OnInit {

  
  public load$: Observable<boolean> = this.loadStore.load$
  
	constructor(
    private userStore: UserStore,
    private tokenStore: TokenStore,
    private router: Router,   
		private loadStore:LoadStore,
    private service:SignOutService
  ) {}

  ngOnInit() {}

  btnClickSignOut(){
    this.loadStore.load = false
    this.userStore.clean()
    this.tokenStore.clean()

    this.service.signOut().subscribe(r=>{
      if(r.getStatusCode() == 200){
        this.loadStore.load = true
        this.router.navigate(['/login']);
      }
    })
  }
}
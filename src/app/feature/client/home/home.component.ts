import { HttpErrorResponse } from '@angular/common/http'
import { Component, ChangeDetectorRef, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { HomeService } from './home.service'
import { AppService } from '@app/app.service'
import { Forms, ISignIn } from './home.interface'
import { IHttpResponse } from '@app/shared/entities/http_response.entity'
import { LocalStorageUserUtils } from '@app/shared/utils/local-storege-user.utils'
import { Role, UserEntity } from '@app/shared/entities/user.entity'
import { OpenSnackBarService } from '@app/shared/service/open_snack_bar/open_snack_bar.service'
import { HttpErrorResponseService } from '@app/shared/service/http_error/http_error_response.service'
import { UserStore } from '@app/shared/stores/customized/user-store'
import { TokenStore } from '@app/shared/stores/customized/token.store'
import { TokenEntity } from '@app/shared/entities/token.entity'
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public user: Observable<UserEntity[]>;
    public token: Observable<TokenEntity[]>;

	constructor(
    private service: HomeService, 
    private router: Router, 
    private appService:AppService,
    private errorHttpUtil:HttpErrorResponseService,
    private open:OpenSnackBarService,
    private userStore:UserStore,
    private tokenStore:TokenStore
  ) {}

  ngOnInit() {
    this.user = this.userStore.user$;
    this.token = this.tokenStore.token$;
  }
}
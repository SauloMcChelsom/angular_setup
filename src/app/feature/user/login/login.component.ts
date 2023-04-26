import { HttpErrorResponse } from '@angular/common/http'
import { Component, ChangeDetectorRef, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { LoginService } from './login.service'
import { AppService } from '@app/app.service'
import { Forms, ISignIn } from './login.interface'
import { IHttpResponse } from '@app/shared/entities/http_response.entity'
import { LocalStorageUserUtils } from '@app/shared/utils/local-storege-user.utils'
import { Role, UserEntity } from '@app/shared/entities/user.entity'
import { OpenSnackBarService } from '@app/shared/service/open_snack_bar/open_snack_bar.service'
import { HttpErrorResponseService } from '@app/shared/service/http_error/http_error_response.service'
import { UserStore } from '@app/shared/stores/customized/user-store'
import { TokenStore } from '@app/shared/stores/customized/token.store'
import { TokenEntity } from '@app/shared/entities/token.entity'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading:boolean = false

  private MAX_CHAR_USER:number = 30

  private MIN_CHAR_USER:number = 6

  private MAX_CHAR_PASSWORD:number = 12
  
  private MIN_CHAR_PASSWORD:number = 6

  private statusValidateForm:boolean = false

  public hide = true;

  public form: FormGroup

  public get user(){ 
    return this.form.get('user') 
  }
  
  public get password(){ 
    return this.form.get('password') 
  }

	constructor(
    private service: LoginService, 
    private router: Router, 
    private appService:AppService,
    private errorHttpUtil:HttpErrorResponseService,
    private open:OpenSnackBarService,
    private userStore:UserStore,
    private tokenStore:TokenStore
  ) {}

  ngOnInit() {
    this.createForm(new Forms())
  }

  private createForm(form: Forms) {
    this.form = new FormGroup({
      user: new FormControl(
        { value: form.user, disabled: false}, 
        Validators.compose([Validators.required])
      ),
      password: new FormControl(
        { value: form.password, disabled: false}, 
        Validators.compose([Validators.required])
      ),
    })
  }

	public onFormSubmit() {
    this.loading = true
    this.validateForm()
    this.signIn()
	}

  public validateForm(){
    if(this.user.value == null){
      this.open.error('Por favor, Informe o seu usuário')
      this.loading = false
      this.user.setErrors({'incorrect': true});
      this.user.markAsTouched()
      return
    }

    if(this.user.value.length == 0){
      this.open.error('Por favor, Informe o seu usuário!')
      this.loading = false
      this.user.setErrors({'incorrect': true});
      this.user.markAsTouched()
      return
    }

    if(this.user.value.length < this.MIN_CHAR_USER){
      this.open.error(`O nome do usuário contém ${this.MIN_CHAR_USER} a ${this.MAX_CHAR_USER} caracteres, faltam ${this.MIN_CHAR_USER - this.user.value.length}`)
      this.loading = false
      this.user.setErrors({'incorrect': true});
      this.user.markAsTouched()
      return
    }

    if(this.user.value.length > this.MAX_CHAR_USER){
      this.open.error(`O nome do usuário contém ${this.MIN_CHAR_USER} a ${this.MAX_CHAR_USER} caracteres, remova ${this.user.value.length - this.MAX_CHAR_USER}`)
      this.loading = false
      this.user.setErrors({'incorrect': true});
      this.user.markAsTouched()
      return
    }

    if(this.password.value == null){
      this.open.error('Por favor, Informe a sua senha')
      this.loading = false
      this.password.setErrors({'incorrect': true});
      this.password.markAsTouched()
      return
    }

    if(this.password.value.length == 0){
      this.open.error('Por favor, Informe a sua senha')
      this.loading = false
      this.password.setErrors({'incorrect': true});
      this.password.markAsTouched()
      return
    }

    if(this.password.value.length < this.MIN_CHAR_PASSWORD){
      this.open.error(`A senha do usuário contém ${this.MIN_CHAR_PASSWORD} a ${this.MAX_CHAR_PASSWORD} caracteres, faltam ${this.MIN_CHAR_PASSWORD - this.password.value.length}`)
      this.loading = false
      this.password.setErrors({'incorrect': true});
      this.password.markAsTouched()
      return
    }

    if(this.password.value.length > this.MAX_CHAR_PASSWORD){
      this.open.error(`A senha do usuário contém ${this.MIN_CHAR_PASSWORD} a ${this.MAX_CHAR_PASSWORD} caracteres, remova ${this.password.value.length - this.MAX_CHAR_PASSWORD}`)
      this.loading = false
      this.password.setErrors({'incorrect': true});
      this.password.markAsTouched()
      return
    }

    this.statusValidateForm = true
  }

  public signIn(){
    if(this.statusValidateForm == false){
      return
    }
		this.service.signInWithUserAndPassword({user:this.user?.value, password: this.password?.value}).subscribe((res: IHttpResponse) => {
      if(res.getStatusCode() == 200){
        this.tokenStore.add(<TokenEntity>res.getResults()[0])
      }else{
        this.open.error("Error")
      }
		},(e:HttpErrorResponse)=>{
      this.errorHttpUtil.HttpErrorShowPopUp(e)
    })
  }

  public cleanUser(){
    this.user.reset()
  }

  public clean(){
    this.createForm(new Forms())
  }
}
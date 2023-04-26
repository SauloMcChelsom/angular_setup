import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { OpenSnackBarService } from "../open_snack_bar/open_snack_bar.service"

@Injectable()
export class HttpErrorResponseService {
    constructor(
        private open:OpenSnackBarService
    ){}

    HttpErrorShowPopUp(e:HttpErrorResponse){
        if(e.statusText  == 'Unknown Error'){
            this.open.error(`${e.message}`)
        }else{
            this.open.error("Ops! Aconteceu um erro inesperado. Entre em contato com o administrador.")
        }
    }
}
import { Injectable } from '@angular/core';
import {  HttpEvent,  HttpInterceptor,  HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenStore } from '../stores/customized/token.store';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private token: TokenStore) {} 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        this.token.token$.subscribe((t)=>{
            if (t.length >= 1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${t[0].access_token}`
                        //'Accept': 'application/json',
                        //'Content-Type': 'application/json'
                    }
                });
            }
        })

        return next.handle(request)
    }
}
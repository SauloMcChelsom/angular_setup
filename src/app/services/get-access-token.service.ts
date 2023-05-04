import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStore } from '@shared/stores/customized/user-store';
import { Role, UserEntity } from '@shared/entities/user.entity';
import { LoadStore } from '@shared/stores/customized/load.store';
import { TokenStore } from '@shared/stores/customized/token.store';
import { IHttpResponse } from '@shared/entities/http_response.entity';
import { HttpErrorResponseService } from '@shared/service/http_error/http_error_response.service';
import { OpenSnackBarService } from '@shared/service/open_snack_bar/open_snack_bar.service';
import { TokenEntity } from '@shared/entities/token.entity';

import { environment as API } from '@env/environment';
const AUTH =  API.api_fake_get
const GET_TOKEN =  API.api_fake_post

@Injectable({ providedIn: 'root'})
export class GetAccessToken {
	constructor(private http: HttpClient) {}

	public start$(token: String): Observable<IHttpResponse>{
		const headers = new HttpHeaders({
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		});
		const body = {
			refresh_token:token
		}
		var set_expires_in = new Date()
		set_expires_in.setMinutes(set_expires_in.getMinutes() + 1)
        //return this.http.post(AUTH, body, {headers: headers}).pipe(map(result=>new IHttpResponse(result)))
		return this.http.post(GET_TOKEN, body, {headers: headers}).pipe(map(result=>new IHttpResponse({
			code:'USER_AUTH_SUCCESS',
			statusCode:200,
			description:'',
			message:'user authetication with success',
			timestamp:new Date().toString(),
			results:[
				new TokenEntity({
					access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
					refresh_token: {
						id: 122,
						token: '5915c1b8-08d0-4e27-a877-8d3c059cdc26',
						expires_in: set_expires_in.toString(),
						timestamp: new Date().toString(),
						user_id: 12,
					}
				})
			]
		})))
    }
}
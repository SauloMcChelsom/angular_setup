import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IHttpResponse } from '@app/shared/entities/http_response.entity';
import { TokenEntity } from '@app/shared/entities/token.entity';
import { ISignIn } from '@app/pages/client/sign_out/sign_out.interface';

import { environment as API } from '@env/environment';
const AUTH = API.api_fake_post;

@Injectable()
export class LoginService {
	constructor(private http: HttpClient) {}

	public signInWithUserAndPassword(user: ISignIn): Observable<IHttpResponse> {
		const headers = new HttpHeaders({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		});
		const body = {
			username: user.user,
			password: user.password,
		};
		var set_expires_in = new Date();
		set_expires_in.setMinutes(set_expires_in.getMinutes() + 1);
		//return this.http.post(AUTH, body, {headers: headers}).pipe(map(result=>new IHttpResponse(result)))
		return this.http.post(AUTH, body, { headers: headers }).pipe(
			map(
				result =>
					new IHttpResponse({
						code: 'USER_AUTH_SUCCESS',
						statusCode: 200,
						description: '',
						message: 'user authetication with success',
						timestamp: new Date().toString(),
						results: [
							new TokenEntity({
								access_token:
									'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
								refresh_token: {
									id: 122,
									token: '5915c1b8-08d0-4e27-a877-8d3c059cdc26',
									expires_in: set_expires_in.toString(),
									timestamp: new Date().toString(),
									user_id: 12,
								},
							}),
						],
					})
			)
		);
	}
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserStore } from '@shared/stores/customized/user-store';
import { Role, UserEntity } from '@shared/entities/user.entity';
import { LoadStore } from '@shared/stores/customized/load.store';
import { TokenStore } from '@shared/stores/customized/token.store';
import { IHttpResponse } from '@shared/entities/http_response.entity';
import { HttpErrorResponseService } from '@shared/services/http_error/http_error_response.service';
import { OpenSnackBarService } from '@shared/services/open_snack_bar/open_snack_bar.service';
import { TokenEntity } from '@shared/entities/token.entity';

import { environment as API } from '@env/environment';
import { GetAccessToken } from './get-access-token.service';
const AUTH = API.api_fake_get;
const GET_TOKEN = API.api_fake_post;

@Injectable({ providedIn: 'root' })
export class IsTokenValid {
	constructor(
		private router: Router,
		private userStore: UserStore,
		private http: HttpClient,
		private loadStore: LoadStore,
		private tokenStore: TokenStore,
		private errorHttpUtil: HttpErrorResponseService,
		private open: OpenSnackBarService,
		private serviceGetAccessToken: GetAccessToken
	) {}

	/**
	 * verificar se o token atual é valido, se não obter um novo token
	 *
	 * se sim, obter o usuario e adicionar o usuario no store do user
	 */
	public start$(): void {
		this.tokenStore.token$.subscribe(res => {
			//token existe
			if (res.length >= 1) {
				//toke é valido
				if (new Date(<string>res[0].refresh_token.expires_in) > new Date()) {
					this.getUser().subscribe(
						(res: IHttpResponse) => {
							if (res.getStatusCode() == 200) {
								this.userStore.clean();
								this.userStore.add(<UserEntity>res.getResults()[0]);
							} else {
								this.open.error('Error');
							}
						},
						(e: HttpErrorResponse) => {
							this.errorHttpUtil.HttpErrorShowPopUp(e);
						}
					);
				} else {
					//obter novo token
					this.serviceGetAccessToken.start$(res[0].refresh_token.token).subscribe(r => {
						if (r.getStatusCode() == 200) {
							this.loadStore.load = true;
							this.tokenStore.clean();
							this.tokenStore.add(<TokenEntity>r.getResults()[0]);
							return true;
						} else {
							this.loadStore.load = true;
							this.router.navigate(['/not-authorized']);
							return false;
						}
					});
				}
			}
		});
	}

	private getUser(): Observable<IHttpResponse> {
		//return this.http.post(AUTH, body, {headers: headers}).pipe(map(result=>new IHttpResponse(result)))
		return this.http.get(AUTH).pipe(
			map(
				result =>
					new IHttpResponse({
						code: 'USER_AUTH_SUCCESS',
						statusCode: 200,
						description: '',
						message: 'user authetication with success',
						timestamp: new Date().toString(),
						results: [
							new UserEntity({
								email: 'saulo@mail.com',
								id: 1555,
								is_active: true,
								last_login: new Date().toString(),
								name: 'saulo',
								password: '',
								providers: 'local.com',
								timestamp: new Date().toString(),
								updated_at: new Date().toString(),
								uid: 'sf56fd5-fd6f56df5fDFD5d65-dfdf8d5ddf56d',
								role: Role.ADMIN,
							}),
						],
					}),
				(e: any) => {}
			)
		);
	}
}

import { Injectable } from '@angular/core'
import { UserStore } from './shared/stores/customized/user-store';
import { Router } from '@angular/router';
import { Role, UserEntity } from './shared/entities/user.entity';
import { LoadStore } from './shared/stores/customized/load.store';
import { TokenStore } from './shared/stores/customized/token.store';
import { Observable } from 'rxjs';
import { IHttpResponse } from './shared/entities/http_response.entity';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment as API } from '@env/environment';
import { HttpErrorResponseService } from './shared/service/http_error/http_error_response.service';
import { OpenSnackBarService } from './shared/service/open_snack_bar/open_snack_bar.service';
import { TokenEntity } from './shared/entities/token.entity';
import { NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocalStorageRouteUtils } from './shared/utils/local-storege-route.utils';
import { RouteEntity } from './shared/entities/route.entity';
import { LocalStorageTokenUtils } from './shared/utils/local-storege-token.utils';

const AUTH =  API.api_fake_get
const GET_TOKEN =  API.api_fake_post

@Injectable()
export class AppService {
	constructor(
		private router: Router,   
		private userStore: UserStore,
		private loadStore:LoadStore,
		private tokenStore:TokenStore,
		private http: HttpClient,
		private errorHttpUtil:HttpErrorResponseService,
        private open:OpenSnackBarService,
	) {}

	/**
     * rotas config basic
     */
	public ConfigRouterBasic(){
		/**
		 * Se houver token, Faz uma requisição para validar token
		 */
		this.userStore.user$.subscribe((res)=>{
			/**
			 * Se retornar um usuario, o token é valido
			 * Para identificar se o usuario e Admin ou clinte, ultilize a flag "is_superuser"
			 */
			if(res.length >= 1){
				if(res[0].getRole() == 'user'){
					if(new LocalStorageRouteUtils().getItem().route.includes("/client/") == false){
						this.router.navigate(['/client/home']);
						return
					}
					if(new LocalStorageRouteUtils().getItem().route.includes("/client/")){
						this.router.navigate([new LocalStorageRouteUtils().getItem().route]);
						return
					}
				}

				if(res[0].getRole() == 'admin'){}
				
			}
		})
	}

	/**
	 * verificar se o token atual e valido, se não obter um novo token
	 */
	public isTokenValid(){
		this.tokenStore.token$.subscribe((res)=>{
			//token existe
			if(res.length >= 1){
				//toke é valido
				if(new Date(<string>res[0].refresh_token.expires_in) > new Date() ){
					this.getUser().subscribe((res: IHttpResponse) => {
						if(res.getStatusCode() == 200){
							this.userStore.clean()
							this.userStore.add(<UserEntity>res.getResults()[0])
						}else{
							this.open.error("Error")
						}
					},(e:HttpErrorResponse)=>{
						this.errorHttpUtil.HttpErrorShowPopUp(e)
					})
				}else{
					//obter novo token
					this.getAccessToken(res[0].refresh_token.token).subscribe((r)=>{
						if(r.getStatusCode() == 200){
							this.loadStore.load = true
							this.tokenStore.clean()
							this.tokenStore.add(<TokenEntity>r.getResults()[0])
							return true
						}else{
							this.loadStore.load = true
							this.router.navigate(['/not-authorized']); 
							return false
						}
					})
				}
			}
		})
	}

	public getUser(): Observable<IHttpResponse>{
        //return this.http.post(AUTH, body, {headers: headers}).pipe(map(result=>new IHttpResponse(result)))
		return this.http.get(AUTH).pipe(map(result=> new IHttpResponse({
			code:'USER_AUTH_SUCCESS',
			statusCode:200,
			description:'',
			message:'user authetication with success',
			timestamp:new Date().toString(),
			results:[
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
					role: Role.USER
				})
			]
		}),(e:any)=>{console.log(e)}))
    }

	public getAccessToken(token: String): Observable<IHttpResponse>{
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

    /**
     * salvar a rota atual localmente
     */
	public saveCurrentRoute(){
		this.router.events.pipe(
			filter((event: any) => event instanceof NavigationStart),
		).subscribe((event: NavigationStart) => {
			let router_entity:RouteEntity = new RouteEntity()
			    router_entity.route = event.url
			
			  let route:RouteEntity[] = [router_entity].map((item:RouteEntity) => {
				return <RouteEntity>{
					route: item.route
				};			
			});
				
			new LocalStorageRouteUtils().setItem(route[0])
		});
	}
} 
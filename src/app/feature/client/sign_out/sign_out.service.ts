import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment as API } from '@env/environment';
import { map } from 'rxjs/operators';
import { ISignIn } from './sign_out.interface';
import { Observable } from 'rxjs';
import { IHttpResponse } from '@app/shared/entities/http_response.entity';
import { Role, UserEntity } from '@app/shared/entities/user.entity';
import { IUser } from '@app/shared/entities/user.entity';
import { TokenEntity } from '@app/shared/entities/token.entity';
//const AUTH = API.api_fake_post+`/api-token-auth/` 
const AUTH =  API.api_fake_get

@Injectable()
export class SignOutService {
	constructor(private http: HttpClient) {}

	signOut(): Observable<IHttpResponse>{
        //return this.http.post(AUTH, body, {headers: headers}).pipe(map(result=>new IHttpResponse(result)))
		return this.http.get(AUTH).pipe(map(result=> new IHttpResponse({
			code:'USER_AUTH_SUCCESS',
			statusCode:200,
			description:'',
			message:'user authetication with success',
			timestamp:new Date().toString(),
			results:[]
		}),(e:any)=>{console.log(e)}))
    }
}
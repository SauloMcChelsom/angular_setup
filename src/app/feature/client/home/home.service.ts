import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment as API } from '@env/environment';
import { map } from 'rxjs/operators';
import { ISignIn } from './home.interface';
import { Observable } from 'rxjs';
import { IHttpResponse } from '@app/shared/entities/http_response.entity';
import { Role, UserEntity } from '@app/shared/entities/user.entity';
import { IUser } from '@app/shared/entities/user.entity';
import { TokenEntity } from '@app/shared/entities/token.entity';
//const AUTH = API.api_fake_post+`/api-token-auth/` 
const AUTH =  API.api_fake_post

@Injectable()
export class HomeService {
	constructor(private http: HttpClient) {}
}
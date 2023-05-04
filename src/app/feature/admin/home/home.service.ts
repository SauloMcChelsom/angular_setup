import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment as API } from '@env/environment';
const AUTH =  API.api_fake_post

@Injectable()
export class HomeService {
	constructor(private http: HttpClient) {}
}
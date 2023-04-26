import { Injectable } from '@angular/core'
import { Role } from '@app/shared/entities/user.entity'
import { HeadNavStoreService } from '@app/shared/stores/customized/head-nav-store.service'
import { UserStore } from '@app/shared/stores/customized/user-store'


@Injectable()
export class HeadNavService {
	constructor(
		private headNav:HeadNavStoreService,
		private userStore: UserStore
	) {}

	public setNav(){
		this.userStore.user$.subscribe((user)=>{
		if(user[0] == undefined){  
			this.setNavUser()
			return
		}

		if(user[0].getRole() == Role.USER){
			this.cleanNav()
			this.setNavClient()
		} 

		if(user[0].getRole() == Role.ADMIN){
			this.cleanNav()
			this.setNavAdmin()
		}
		})
	}

	private setNavUser(){
		this.headNav.add('head-nav-user')
	}  
	
	private setNavClient(){
		this.headNav.add('head-nav-client')
	} 

	private setNavAdmin(){
		this.headNav.add('head-nav-admin')
	} 

	private cleanNav(){
		this.headNav.clean()
	} 
} 
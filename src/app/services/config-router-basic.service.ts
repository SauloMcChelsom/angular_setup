import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStore } from '@shared/stores/customized/user-store';
import { LocalStorageRouteUtils } from '@shared/utils/local-storege-route.utils';

@Injectable({ providedIn: 'root' })
export class ConfigRouterBasic {
	constructor(
		private router: Router,
		private userStore: UserStore
	) {}

	/**
	 * ConfigRouterBasic
	 */
	public start$() {
		/**
		 * Se houver token, Faz uma requisição para validar token
		 */
		this.userStore.user$.subscribe(res => {
			/**
			 * Se retornar um usuario, o token é valido
			 * Para identificar se o usuario e Admin ou clinte, ultilize a flag "is_superuser"
			 */
			if (res.length >= 1) {
				if (res[0].getRole() == 'user') {
					if (new LocalStorageRouteUtils().getItem().route.includes('/client/') == false) {
						this.router.navigate(['/client/home']);
						return;
					}
					if (new LocalStorageRouteUtils().getItem().route.includes('/client/')) {
						this.router.navigate([new LocalStorageRouteUtils().getItem().route]);
						return;
					}
				}

				if (res[0].getRole() == 'admin') {
					if (new LocalStorageRouteUtils().getItem().route.includes('/admin/') == false) {
						this.router.navigate(['/admin/home']);
						return;
					}
					if (new LocalStorageRouteUtils().getItem().route.includes('/admin/')) {
						this.router.navigate([new LocalStorageRouteUtils().getItem().route]);
						return;
					}
				}
			}
		});
	}
}

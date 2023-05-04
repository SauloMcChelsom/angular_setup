import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocalStorageRouteUtils } from '@shared/utils/local-storege-route.utils';
import { RouteEntity } from '@shared/entities/route.entity';

@Injectable({ providedIn: 'root'})
export class SaveCurrentRoute {
	constructor(private router: Router) {}

    /**
     * salvar a rota atual localmente
     */
	public start$():void {
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
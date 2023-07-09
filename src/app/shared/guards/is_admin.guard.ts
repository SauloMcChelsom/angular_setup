import { Injectable } from '@angular/core';
import { CanActivate, Route } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserStore } from '../stores/customized/user-store';
import { Role } from '../entities/user.entity';

@Injectable()
export class IsAdminGuard implements CanActivate {
	constructor(
		private router: Router,
		private userStore: UserStore
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.userStore.user$.pipe(
			map(e => {
				if (e.length >= 1) {
					if (e[0].getRole() == Role.ADMIN) {
						return true;
					} else {
						this.router.navigate(['/forbidden']);
						return false;
					}
				} else {
					this.router.navigate(['/forbidden']);
					return false;
				}
			}),
			catchError(err => {
				this.router.navigate(['/forbidden']);
				return of(false);
			})
		);
	}
}

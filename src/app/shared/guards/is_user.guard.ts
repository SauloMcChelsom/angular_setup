import { Injectable } from '@angular/core'
import { CanLoad, CanActivate } from '@angular/router'
import { Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { TokenStore } from '../stores/customized/token.store';
import { Observable, of } from 'rxjs';
import { AppService } from '@app/app.service';
import { TokenEntity } from '../entities/token.entity';
import { LoadStore } from '../stores/customized/load.store';
import { UserStore } from '../stores/customized/user-store';
import { Role } from '../entities/user.entity';


@Injectable()
export class IsUserGuard implements CanActivate {
  constructor(
    private router: Router,
    private userStore:UserStore
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.userStore.user$.pipe(
      map(e => {
        if (e.length >= 1) {
            if(e[0].getRole() == Role.USER){
              return true
            }else{
              this.router.navigate(['/forbidden']); 
              return false
            }
        } else {
          this.router.navigate(['/forbidden']); 
          return false
        }
      }),
      catchError((err) => {
        this.router.navigate(['/forbidden']); 
        return of(false);
      })
    )
  }
}
import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { map, catchError } from 'rxjs/operators'
import { TokenStore } from '../stores/customized/token.store';
import { Observable, of } from 'rxjs';
import { TokenEntity } from '../entities/token.entity';
import { LoadStore } from '../stores/customized/load.store';
import { GetAccessToken } from '@app/services/get-access-token.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private tokenStore:TokenStore,
    private serviceGetAccessToken:GetAccessToken,
    private loadStore:LoadStore,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.tokenStore.token$.pipe(
      map(e => {
        if (e.length >= 1) {
            if(new Date(<string>e[0].refresh_token.expires_in) > new Date() ){
              return true
            }else{
              //obter novo token
              this.loadStore.load = false
              this.serviceGetAccessToken.start$(e[0].refresh_token.token).subscribe((r)=>{
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
              return true
            }
        } else {
          this.router.navigate(['/not-authorized']); 
          return false
        }
      }),
      catchError((err) => {
        this.router.navigate(['/not-authorized']); 
        return of(false);
      })
    )
  }
}
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


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private http: HttpClient, 
    private tokenStore:TokenStore,
    private appService:AppService,
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
              this.appService.getAccessToken(e[0].refresh_token.token).subscribe((r)=>{
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
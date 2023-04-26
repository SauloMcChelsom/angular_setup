import { Injectable } from '@angular/core'
import { CanLoad, CanActivate } from '@angular/router'
import { Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { environment as API } from '@env/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class IsUserGuard implements CanActivate {

  private profile = `${API.api_fake}`

  constructor(private router: Router, private http: HttpClient) {}

  async canActivate() {
    const user = await this.isUserLoggedIn()
    const isLoggedIn:Boolean = user.results[0].is_superuser
    
    if(isLoggedIn == false){
      this.router.navigate(['/forbidden']); 
      return false
    }
    return true
  }

  private isUserLoggedIn(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.profile).pipe(map(result=>result)).subscribe((response: any) => {
        //new LSUser().setItem(response)
        resolve(response);
      },(e)=>{
        //new LSToken().removeItem()
        //new LSUser().removeItem()
        this.router.navigate(['/not-authorized']); 
        resolve(e);
      });
    });
  }
}
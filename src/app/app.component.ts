import { Component, ChangeDetectionStrategy, ViewChild, OnInit} from '@angular/core';
import { HeadNavStoreService } from './shared/stores/customized/head-nav-store.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { HeadNavService } from './shared/services/head_nav/head_nav.service';
import { LoadStore } from './shared/stores/customized/load.store';
import { Observable } from 'rxjs'
import { LocalStoregeService } from './shared/services/local_storege/local_storege.service';
import { ConfigRouterBasic } from './services/config-router-basic.service';
import { IsTokenValid } from './services/is-token-valid.service';
import { SaveCurrentRoute } from './services/save-current-route.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  //black-theme / nature-theme / default-theme / light-theme
  public  theme$ = 'default-theme'

  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav

  readonly lastHeadNavs$ = this.headNav.lastHeadNavs$

  public load$: Observable<boolean> = this.loadStore.load$

  constructor( 
    private observer: BreakpointObserver,   
    private headNav:HeadNavStoreService,
    private headNavService:HeadNavService,
    private loadStore:LoadStore,
    private localStorege:LocalStoregeService,
    private serviceConfigRouterBasic:ConfigRouterBasic,
    private serviceIsTokenValid:IsTokenValid,
    private serviceSaveCurrentRoute:SaveCurrentRoute
  ) {}

  public ngOnInit() {

    this.localStorege.saveTokenLocal()

    this.headNavService.setNav()
    
    this.serviceConfigRouterBasic.start$()

    this.serviceIsTokenValid.start$()

    this.serviceSaveCurrentRoute.start$()
  
    /**
     * Se a aba do navegador for arrastada para tamnho que
     * o menu lateral irar sumir
     * se for arrastada para maior o menu lateral ira aparecer
     */
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    /**quando a pagina iniciar, ocultar barra de manu lateral*/
    this.sidenav.close();
  }

  /**
   * em modo mobile, quando o menu lateral for clicado, oculta e mostra a tela referente aquele menu
   */
  public sideNavClose(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    })
  }
}
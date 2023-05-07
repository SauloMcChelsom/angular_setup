import { NgModule } from '@angular/core'
import { Routes, RouterModule, NoPreloading  } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/core/help/help.module').then(m => m.HelpModule),
  },
  {
    path: 'not-authorized',
    loadChildren: () => import('./pages/core/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./pages/core/forbidden/forbidden.module').then(m => m.ForbiddenModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/core/not-found/notfound.module').then(m => m.PageNotFoundModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: NoPreloading,

      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoute {}
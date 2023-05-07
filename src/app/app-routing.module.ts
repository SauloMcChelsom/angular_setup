import { NgModule } from '@angular/core'
import { Routes, RouterModule, NoPreloading  } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/user/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/user/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./feature/core/help/help.module').then(m => m.HelpModule),
  },
  {
    path: 'not-authorized',
    loadChildren: () => import('./feature/core/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./feature/core/forbidden/forbidden.module').then(m => m.ForbiddenModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./feature/core/not-found/notfound.module').then(m => m.PageNotFoundModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./feature/client/client.module').then(m => m.ClientModule),
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
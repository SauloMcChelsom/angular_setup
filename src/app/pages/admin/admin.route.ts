import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: 'sign-out',
    loadChildren: () => import('./sign_out/sign_out.module').then(m => m.SignOutModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  },
  {
    path: 'course',
     loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRouteModule {}
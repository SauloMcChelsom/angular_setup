import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularMaterialModule } from '@app/shared/theme/angular-material.module'
import { AppComponent } from '@app/app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { HeadNavUserModule } from '@app/shared/component/head-nav-user/head-nav-user.module'
import { HeadNavClientModule } from '@app/shared/component/head-nav-client/head-nav-client.module'
import { HeadNavAdminModule } from '@app/shared/component/head-nav-admin/head-nav-admin.module'
import { MenuSideclientModule } from './shared/component/menu-side-client/menu-side-client.module';
import { MenuSideUserModule } from './shared/component/menu-side-user/menu-side-user.module';
import { MenuSideAdminModule } from './shared/component/menu-side-admin/menu-side-admin.module';
import { AuthGuard } from '@app/shared/guards/auth.guard'
import { IsAdminGuard } from '@app/shared/guards/is_admin.guard'
import { IsUserGuard } from './shared/guards/is_user.guard';
import { AuthInterceptorService } from '@app/shared/interceptor/auth.interceptor'
import { LocalStorageTokenUtils } from '@app/shared/utils/local-storege-token.utils'
import { environment } from '../environments/environment'
import { AppRoute } from '@app/app.route'
import { AppService } from './app.service';
import { HttpErrorResponseModule } from './shared/service/http_error/http_error_response.module';
import { OpenSnackBarModule } from './shared/service/open_snack_bar/open_snack_bar.module';
import { HeadNavModule } from './shared/service/head_nav/head_nav.module';
import { LocalStoregeModule } from './shared/service/local_storege/local_storege.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    AppRoute,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LocalStoregeModule,
    HeadNavUserModule,
    HeadNavClientModule,
    HeadNavAdminModule,
    MenuSideclientModule,
    MenuSideUserModule,
    MenuSideAdminModule,
    HttpErrorResponseModule,
    OpenSnackBarModule,
    HeadNavModule
  ],
  providers: [
    AuthGuard,
    IsAdminGuard,
    IsUserGuard,
    LocalStorageTokenUtils,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AppService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

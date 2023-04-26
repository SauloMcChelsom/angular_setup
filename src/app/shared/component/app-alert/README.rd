Accessing Other Components
https://angular-training-guide.rangle.io/advanced-components/access_child_components



<app-alert></app-alert>
----------------module------------------------
import { AlertComponent } from '@app/component/app-alert/app-alert';

@NgModule({
  imports: [.... ], 
  declarations: [
    AlertComponent
  ],
---------------component-------------------------

import { AlertComponent } from '@app/component/app-alert/app-alert';
  @ViewChild(AlertComponent) alert: AlertComponent;

  ngInit(){
   this.alert.show()
  }
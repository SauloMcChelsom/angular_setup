
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookStoreEffects } from './services/store/index.effects';
import { bookReducer } from './services/store/index.reducers'
import { TodosApiService } from './services/api/todos-api.service'
import { TodosStateService } from './services/todos-state.service'

import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';

import { ListComponent } from './components/list/list.component'
import { CreateComponent } from './components/create/create.component'
import { EditComponent } from './components/edit/edit.component'
import { DetailComponent } from './components/detail/detail.component'

import { FeedComponent } from './feed.component'
import { FeedRoutingModule } from './feed-routing.module';

const Components = [
  FeedComponent,
  ListComponent,
  CreateComponent,
  EditComponent,
  DetailComponent
]

const Modules = [
  AngularMaterialModule,
  FeedRoutingModule,
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    ...Modules,
    StoreModule.forFeature('bookStore', bookReducer),
    EffectsModule.forFeature([BookStoreEffects])
  ],
  providers: [TodosApiService, TodosStateService],
  bootstrap: [],
  exports: [
    ...Components
  ]
})
export class FeedModule {}

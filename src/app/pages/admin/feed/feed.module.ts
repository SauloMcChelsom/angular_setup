import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppStoreEffects } from './services/store/index.effects';
import { appReducer } from './services/store/index.reducers';
import { TodosApiService } from './services/api/todos-api.service';
import { TodosStateService } from './services/todos-state.service';

import { AngularMaterialModule } from '@app/shared/theme/angular-material.module';
import { SkeletonModule } from '@app/shared/components/skeleton/skeleton.module';

import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilterComponent } from './components/filter/filter.component';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedFormComponent } from './components/create/form/form.component';
import { FeedFormDetailComponent } from './components/detail/form/form.component';

const Components = [FeedComponent, ListComponent, CreateComponent, DetailComponent, FilterComponent, FeedFormComponent, FeedFormDetailComponent];

const Modules = [AngularMaterialModule, FeedRoutingModule, SkeletonModule, FormsModule, ReactiveFormsModule];

@NgModule({
	declarations: [...Components],
	imports: [CommonModule, ...Modules, StoreModule.forFeature('feedStoreVersion', appReducer), EffectsModule.forFeature([AppStoreEffects])],
	providers: [TodosApiService, TodosStateService],
	bootstrap: [],
	exports: [...Components],
})
export class FeedModule {}

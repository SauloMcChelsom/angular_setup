import { createSelector } from '@ngrx/store'
import { Todo } from '../../models/todo';
import { AppState } from '../../models/app-state';

const AppFeature = (state: any) => {
  return state.feedStoreVersion//StoreModule.forFeature('feedStoreVersion', appReducer),
}

export const getApp = createSelector(
  AppFeature,
  (state: AppState, id: number) =>  <Todo[]>state.item.filter(x=> x.id === id)
)

export const getApps = createSelector(
  AppFeature,
  (state: AppState) => <any>state.selected
)

export const getSelectedApp = createSelector(
  AppFeature,
  (state: AppState) => state.selected
)
  
export const getAppError = createSelector(
  AppFeature,
  (state: AppState) => state.error
)
  
export const getAppIsLoading = createSelector(
  AppFeature,
  (state: AppState) => state.isLoading
)
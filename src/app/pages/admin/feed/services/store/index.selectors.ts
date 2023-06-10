import { createSelector } from '@ngrx/store'
import { Todo } from '../../models/todo';
import { AppState } from '../../models/app-state';

const AppFeature = (state: any) => {
  return state.feedStoreVersion//StoreModule.forFeature('feedStoreVersion', appReducer),
}

export const getApp = createSelector(
  AppFeature,
  (state: AppState, id: number) =>  <Todo[]>state.items.filter(x=> x.id === id)
)

export const getAppIsPrivate = createSelector(
  AppFeature,
  (state: AppState, isPrivate: boolean) => {
    let sss:any = state.selected ?? []
    return sss.filter(x=> x.isPrivate === isPrivate) 
  }
)

export const getAppIsBusiness = createSelector(
  AppFeature,
  (state: AppState, isBusiness: boolean) => {
    let sss:any = state.selected ?? []
    return sss.filter(x=> x.isBusiness === isBusiness) 
  }
)

export const Apps = createSelector(
  AppFeature,
  (state: AppState) => state
)

export const Items = createSelector(
  AppFeature,
  (state: AppState) => state.items
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
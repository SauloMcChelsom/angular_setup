import { createSelector } from '@ngrx/store'
import { Todo } from '../../models/todo';
import { AppState } from '../../models/app-state';

const BookFeature = (state: any) => {
  return state.bookStore//StoreModule.forFeature('bookStore', bookReducer),
}

export const getBook = createSelector(
  BookFeature,
  (state: AppState, id: number) =>  <Todo[]>state.item.filter(x=> x.id === id)
)

export const getBooks = createSelector(
  BookFeature,
  (state: AppState) => <any>state.selected
)

export const getSelectedBook = createSelector(
  BookFeature,
  (state: AppState) => state.selected
)
  
export const getBookError = createSelector(
  BookFeature,
  (state: AppState) => state.error
)
  
export const getBookIsLoading = createSelector(
  BookFeature,
  (state: AppState) => state.isLoading
)
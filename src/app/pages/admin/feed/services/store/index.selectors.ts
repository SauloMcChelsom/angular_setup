import { createSelector } from '@ngrx/store'
import { Todo } from '../../models/todo';
import { AppState } from '../../models/app-state';

const BookFeature = (state: any) => {
  return state.bookStore//StoreModule.forFeature('bookStore', bookReducer),
}
  
export const getBooks = createSelector(
  BookFeature,
  (state: AppState) => <Todo[]>state.body
)

export const getFilter = createSelector(
  BookFeature,
  (state: AppState) => <Todo[]>state.body
)
  
export const getBook = createSelector(
  BookFeature,
  (state: AppState, id: number) => state.body//.filter(x=> x.id === id)
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
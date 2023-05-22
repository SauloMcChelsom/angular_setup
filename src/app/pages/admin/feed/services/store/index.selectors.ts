import { createSelector } from '@ngrx/store'
import { Todo } from '../../models/todo';

export interface Success {
	statusCode: number
	code: string
	message: string
	description: string
	timestamp: string
}

export interface errors {
	statusCode: number
	code: string
	message: string
	description: string
	timestamp: string
}

export interface AppState {
  selected: any
  body: any
  isLoading?: boolean
  error?: any
}

export const initialState: AppState = {
	selected: null,
	body: null,  
	isLoading: false,
	error: null
}

   
const BookFeature = (state: any) => {
  return state.bookStore//StoreModule.forFeature('bookStore', bookReducer),
}
  
export const getBooks = createSelector(
  BookFeature,
  (state: AppState) => <Todo[]>state.body?.results
)

export const getFilter = createSelector(
  BookFeature,
  (state: AppState) => <Success>state.body
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
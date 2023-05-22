import { createReducer, on } from '@ngrx/store';
import * as BookActionTypes from './index.actions';

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

export const bookReducer = createReducer(
  initialState,

  on(BookActionTypes.loadBookByUserIdRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),

  on(BookActionTypes.loadBookByUserIdSuccessAction, (state, { book }) => ({
    ...state,
    isLoading: false,
    body: book
  })),

  on(BookActionTypes.loadBookByUserIdFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
  
  on(BookActionTypes.loadBookRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(BookActionTypes.loadBookSuccessAction, (state, { book }) => ({
      ...state,
      isLoading: false,
      selected: book
  })),
 
  on(BookActionTypes.loadBookFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(BookActionTypes.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(BookActionTypes.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),
 
  on(BookActionTypes.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 

  on(BookActionTypes.detailNotificationAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),

  on(BookActionTypes.updateNotificationAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),
 
  on(BookActionTypes.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(BookActionTypes.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),
 
  on(BookActionTypes.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(BookActionTypes.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(BookActionTypes.deleteSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
    //body: state.books.filter(x => x.id != id)
  })),
 
  on(BookActionTypes.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
)
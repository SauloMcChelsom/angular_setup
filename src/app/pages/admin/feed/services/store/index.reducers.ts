import { createReducer, on } from '@ngrx/store';
import * as AppActionTypes from './index.actions';
import { initialState } from '../../models/app-state';

export const appReducer = createReducer(
  initialState,

  on(AppActionTypes.loadAppAllAction, (state, {}) => ({
    ...state,
    isLoading: true,
  })),
  
  on(AppActionTypes.loadAppRequestAction, (state, {id}) => ({
    ...state,
    isLoading: true 
  })),
 
  on(AppActionTypes.loadAppSuccessAction, (state, { item }) => ({
      ...state,
      isLoading: false,
      selected: item
  })),
 
  on(AppActionTypes.loadAppFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(AppActionTypes.saveRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(AppActionTypes.saveSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),
 
  on(AppActionTypes.saveFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
 
  on(AppActionTypes.updateRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(AppActionTypes.updateSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
  })),
 
  on(AppActionTypes.updateFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })), 
 
  on(AppActionTypes.deleteRequestAction, state => ({
    ...state,
    isLoading: true 
  })),
 
  on(AppActionTypes.deleteSuccessAction, (state, { item }) => ({
    ...state,
    isLoading: false,
    selected: item,
    error: null
    //body: state.apps.filter(x => x.id != id)
  })),
 
  on(AppActionTypes.deleteFailureAction, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
)
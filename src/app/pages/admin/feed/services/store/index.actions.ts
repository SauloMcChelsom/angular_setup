import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { errors } from '../../models/erros';

export enum ActionTypes {
  LOAD_BOOK_ALL = '[App] Load App All',
  LOAD_BOOK_REQUEST = '[App] Load App Request',
  LOAD_BOOK_FAILURE = '[App] Load App Failure',
  LOAD_BOOK_SUCCESS = '[App] Load App Success',
 
  SAVE_REQUEST = '[App] Save',
  SAVE_FAILURE = '[App] Save Failure',
  SAVE_SUCCESS = '[App] Save Success',

  UPDATE_REQUEST = '[App] Update',
  UPDATE_FAILURE = '[App] Update Failure',
  UPDATE_SUCCESS = '[App] Update Success',
 
  DELETE_REQUEST = '[App] Delete',
  DELETE_FAILURE = '[App] Delete Failure',
  DELETE_SUCCESS = '[App] Delete Success'
}

export const loadAppAllAction = createAction(
  ActionTypes.LOAD_BOOK_ALL,
);

export const loadAppRequestAction = createAction(
  ActionTypes.LOAD_BOOK_REQUEST,
  props<{ id: number }>()
);
  
export const loadAppSuccessAction = createAction(
  ActionTypes.LOAD_BOOK_SUCCESS,
  props<{ item: Todo }>()
);
  
export const loadAppFailureAction = createAction(
  ActionTypes.LOAD_BOOK_FAILURE,
  props<{ error: errors }>()
);

export const saveRequestAction = createAction(
  ActionTypes.SAVE_REQUEST,
  props<{ item: Todo }>()
);
  
export const saveFailureAction = createAction(
  ActionTypes.SAVE_FAILURE,
  props<{ error: errors }>()
);
  
export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ item: Todo }>()
);
  

export const updateRequestAction = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ item: Todo }>()
);
  
export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: errors }>()
);
  
export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ item: Todo }>()
);
    
export const deleteRequestAction = createAction(
  ActionTypes.DELETE_REQUEST,
  props<{ item: Todo }>()
);
  
export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ error: errors }>()
);
    
export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
  props<{ item: Todo }>()
);
import { errors } from './erros';
import { Todo } from './todo';

export interface AppState {
  selected: Todo
  body: Array<Todo>;
  isLoading?: boolean
  error?: errors
}

export const initialState: AppState = {
	selected: null,
	body: null,  
	isLoading: false,
	error: null
}
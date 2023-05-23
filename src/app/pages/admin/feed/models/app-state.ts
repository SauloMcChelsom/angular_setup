import { errors } from './erros';
import { Todo } from './todo';

export interface AppState {
  selected: Todo
  item: Array<Todo>;
  isLoading?: boolean
  error?: errors
}

export const initialState: AppState = {
	selected: null,
	item: null,  
	isLoading: false,
	error: null
}
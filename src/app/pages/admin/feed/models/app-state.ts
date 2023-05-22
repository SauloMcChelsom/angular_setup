import { Todo } from './todo';

export interface AppState {
  selected: any
  body: Array<Todo>;
  isLoading?: boolean
  error?: any
}

export const initialState: AppState = {
	selected: null,
	body: null,  
	isLoading: false,
	error: null
}
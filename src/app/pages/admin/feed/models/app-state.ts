import { errors } from './erros';
import { Filter } from './filter';
import { Todo } from './todo';

export interface AppState {
  selected: Todo
  items: Todo[];
  isLoading?: boolean
  error?: errors
  filter: Filter;
}

export const initialState: AppState = {
	selected: null,
	items: null,  
	isLoading: false,
	error: null,
  filter: {
    search: '',
    category: {
      isBusiness: false,
      isPrivate: false,
    },
  },
}

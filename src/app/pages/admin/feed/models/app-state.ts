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

interface TodoState {
  todos: Todo[];
  selectedTodoId: number;
  filter: any;
}

const initialStates: TodoState = {
  todos: [],
  selectedTodoId: undefined,
  filter: {
    search: '',
    category: {
      isBusiness: false,
      isPrivate: false,
    },
  },
};
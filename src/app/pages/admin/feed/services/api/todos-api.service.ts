import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';

const apiUrl = 'http://localhost:3000/todos/';

@Injectable()
export class TodosApiService {
 
  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl);
  }

  public getTodoById(id:number){
    return this.http.get<Todo>(apiUrl + id)
  } 

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(apiUrl, todo);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(apiUrl + todo.id, todo);
  }

  public deleteTodo(todo: Todo): Observable<void> {
    return this.http.delete<void>(apiUrl + todo.id);
  }
}
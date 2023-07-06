import { Component } from '@angular/core';
import { FacadeService } from './facade.service';
import { User } from './entities//user.model';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  readonly selectedUser$ = this.facade.selectedUser$;
  readonly users$ = this.facade.users$;

  constructor(
    private readonly facade: FacadeService
  ) {
    this.selectedUser$.subscribe((r)=>{
      console.log(r)
    })
    this.users$.subscribe((r)=>{
      console.log(r)
    })
  }

  selectUser(user: User) {
    this.facade.selectUser(user);
  }

  load() {
    this.facade.loadUsers();
  }

  select(){
    let user:User = {
      email: "john@doe.com",
      favourites: {pizzaId: 2, songId: 3},
      id: 1
    }

    this.selectUser(user)
  }
}

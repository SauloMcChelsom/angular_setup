import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { TodoRoute } from './todo.route';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { FilterComponent } from './components/filter/filter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatSidenavModule,
        TodoRoute
    ],
    declarations: [
        TodoShellComponent, 
        TodoDetailComponent, 
        FilterComponent, 
        TodoListComponent
    ]
})
export class TodoModule { }

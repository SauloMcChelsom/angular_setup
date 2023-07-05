import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface Todo {
  id: number;
  title: string;
  isDone: boolean;
  isBusiness?: boolean;
  isPrivate?: boolean;
}

export let initialState: Todo = {
  id: null,
  title: '',
  isDone: false,
  isBusiness: false,
  isPrivate: false
}

@Component({
  selector: 'app-form-detail',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedFormDetailComponent implements OnInit {

    private unsubscribe$ = new Subject();

    @Input()
    todos: any;

    @Output() 
    public filterUpdate: EventEmitter<Todo> = new EventEmitter();

    public form:FormGroup

    public get title(){ 
        return this.form.get('title') 
    }

    public get isDone(){ 
        return this.form.get('isDone') 
    }

    public get isBusiness(){ 
        return this.form.get('isBusiness') 
    }
    
    public get isPrivate(){ 
        return this.form.get('isPrivate') 
    }

    public  foods = [
        {value: 'isBusiness', viewValue: 'Is business'},
        {value: 'isPrivate', viewValue: 'Is private'},
    ];

    public selected = null;
    
    constructor(private router: Router) {}

    ngOnInit() {
        this.createForm(initialState)
        this.form.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(350)).subscribe((value) => {
            this.filterUpdate.emit({...value});
        });

        if(this.todos == null || this.todos == undefined){
            this.router.navigate(['/admin/course']);
        }else{
            this.form.patchValue({
                ...this.todos
            })
            if(this.todos.isPrivate){
                this.selected = 'isPrivate'
            }else if(this.todos.isBusiness){
                this.selected = 'isBusiness'
            }
        }
    }

    private createForm(form: Todo) {
        this.form = new FormGroup({
            id: new FormControl(
                { value: form.id, disabled: false}, 
                Validators.compose([Validators.required])
            ),
            title: new FormControl(
                { value: form.title, disabled: false}, 
                Validators.compose([Validators.required])
            ),
            isDone: new FormControl(
                { value: form.isDone, disabled: false}, 
                Validators.compose([Validators.required])
            ),
            isBusiness: new FormControl(
                { value: form.isBusiness, disabled: false}, 
                Validators.compose([Validators.required])
            ),
            isPrivate: new FormControl(
                { value: form.isPrivate, disabled: false}, 
                Validators.compose([Validators.required])
            ),
        })
    }

    public CategoryChange(){
        if(this.selected == undefined){
            this.form.patchValue({
                isBusiness:null,
                isPrivate:null
            })
        }else if(this.selected == 'isPrivate'){
            this.form.patchValue({
                isBusiness:false,
                isPrivate:true
            })
        }else if(this.selected == 'isBusiness'){
            this.form.patchValue({
                isBusiness:true,
                isPrivate:false
            })
        }
    }

    public cleanUser(){
        this.title.reset()
    }
}